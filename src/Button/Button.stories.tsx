import React from "react";
import { Button } from "./Button";
import '../index.scss'

export default {
  title: "Button"
}

export const Primary = () => (
  <Button type='primary'>Primary Button</Button>
);

export const Secondary = () => (
  <Button type='secondary'>Secondary Button</Button>
)
