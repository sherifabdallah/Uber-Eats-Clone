import React from 'react';
import RootNavigation from "./navigation";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export default function App() {
  return (
    <RootNavigation />
  );
}
