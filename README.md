# Todo

Basic todo application on mobile platform

## Running development of application

In your terminal:

1. Run command git clone https://github.com/Mleng89/native-todo.git
2. cd native-todo
3. `npm install` or `npm i`
4. a.`npm start` or `expo start`
5. b. optional: Using your respective smart phone, scan QR code to run development on your device.

> Note: On MacOS you must have Xcode installed to run an iPhone simulator. If not, on your respective smart phone, find `Expo Client` or `Expo Go` and download the application to run development on a physical device.

### Notes:

_Problem_: Clearing TextInput after submit

_Solution_: Using direct manipulation with useRef, placing a ref prop into TextInput.
Following codeblock to be put into function that submits

```
inputRef.current.setNativeProps({ text: '' });
```
