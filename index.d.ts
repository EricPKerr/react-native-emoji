import { Component } from 'react';
import { StyleProp, TextStyle, TextProperties } from 'react-native';

export default class Emoji extends Component<
  { name: string } & TextProperties
> {}
