# RN 同时使用 `Stack.Navigator` 和 `Tab.navigator`

> 该文章的记录用于: 避免出现子路由出现在父路由的页面位置, 而不是覆盖父路由(包括 `Tab.Navigator` 和 `header`)

## 前言

简单归类成两个文件(这里是举例, 实际按照自己习惯或者规范来), 假设我的项目结构如下:

```tree
├─App.js
├─app.json
└─src
  ├─components
  │ ├─MyListItem.jsx
  │ ├─NavigatorBar.jsx
  │ └─NavigatorIconItem.jsx
  ├─router
  │ └─index.jsx
  └─views
    ├─EnglishScreen.jsx
    ├─HomeScreen.jsx
    ├─MathScreen.jsx
    ├─MyScreen.jsx
    └─SettingScreen.jsx
```

## 1. App.js

```jsx
import { NavigationContainer } from "@react-navigation/native";

import Router from "./src/router/index";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
```

## 2. src/router/index.jsx

```jsx
import React, { Component } from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import MyScreen from "../views/MyScreen";
import SettingScreen from "../views/SettingScreen";

// **注意这个文件**, 这个也是重点, 里面放的就是 Tab.Navigator
import NavigatorBar from "../components/NavigatorBar";

const MyStack = createStackNavigator();

export default class index extends Component {
  render() {
    return (
      <MyStack.Navigator
        screenOptions={{
          headerShown: true,

          // 这个设置可以调整子路由组件的出现方式(也可以说是路由进入动画)
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {/* 圈重点, 按照正常路由组件来注册即可 */}
        <MyStack.Screen
          name="Bottom"
          component={NavigatorBar}
          options={{ headerShown: false }}
        />
        {/* 圈重点, 按照正常路由组件来注册即可 */}

        <MyStack.Screen
          name="MyScreen"
          component={MyScreen}
          options={{ headerShown: false }}
        />
        <MyStack.Screen
          name="Settings"
          component={SettingScreen}
          options={{ title: "设置", headerMode: "screen" }}
        />
      </MyStack.Navigator>
    );
  }
}
```

## 3. src/components/NavigatorBar.jsx

> 这个就是直接按照自己需要来放 `Tab.Navigator` 组件

```jsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../views/HomeScreen";
import MathScreen from "../views/MathScreen";
import EnglishScreen from "../views/EnglishScreen";
import MyScreen from "../views/MyScreen";
import NavigatorIconItem from "./NavigatorIconItem";

const Tab = createBottomTabNavigator();

export default function NavigatorBar() {
  return (
    <Tab.Navigator
      initialRouteName="My"
      screenOptions={{
        tabBarActiveTintColor: "#409EFF",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "主页",
          headerTitle: "主页",
          tabBarIcon: () => (
            <NavigatorIconItem
              src={require("../assets/imgs/navigation/首页.png")}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Math"
        component={MathScreen}
        options={{
          tabBarLabel: "数学",
          headerTitle: "数学",
          tabBarIcon: () => (
            <NavigatorIconItem
              src={require("../assets/imgs/navigation/数学.png")}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Eng"
        component={EnglishScreen}
        options={{
          tabBarLabel: "英语",
          headerTitle: "英语",
          tabBarIcon: () => (
            <NavigatorIconItem
              src={require("../assets/imgs/navigation/英语.png")}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{
          tabBarLabel: "我的",
          headerTitle: "我的",
          tabBarIcon: () => (
            <NavigatorIconItem
              src={require("../assets/imgs/navigation/我的.png")}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
```
