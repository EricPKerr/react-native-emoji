# React Native Emoji

Emoji as React Native component

```JSX
<Emoji name="coffee" style={{fontSize: 50}} />
```

![](http://i59.tinypic.com/fe3rly.png)

### Installation

1. Install package via npm:

```
npm install --save react-native-emoji
```

2. Require in your project

```javascript
import Emoji from 'react-native-emoji';
```

### Component properties

- `name` (String) - Emoji's name ([full list](http://unicodey.com/emoji-data/table.htm))  
  Note that dashes should be replaced with underscores, e.g. `raising-hand` becomes `raising_hand`.
- All supported `<Text />` properties, like `style`.

### Credits

Based on [node-emoji](https://github.com/omnidan/node-emoji). Originally maintained by [@jorilallo](https://twitter.com/jorilallo).
