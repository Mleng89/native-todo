# Todo

Basic todo application on mobile platform

---

## Notes:

_Problem_: Clearing TextInput after submit

_Solution_: Using direct manipulation with useRef, placing a ref prop into TextInput.
Following codeblock to be put into function that submits

```
inputRef.current.setNativeProps({ text: '' });
```
