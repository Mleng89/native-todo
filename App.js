import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
	const [userInput, setUserInput] = useState('');
	const [todos, setTodos] = useState([]);
	function goalInputHandler(inputText) {
		setUserInput(inputText);
	}
	const inputRef = useRef();

	function addTodoHandler() {
		setTodos((currTodos) => [...todos, userInput]);
		inputRef.current.setNativeProps({ text: '' });
	}
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					ref={inputRef}
					style={styles.textInput}
					placeholder='Current todos'
					onChangeText={goalInputHandler}
				/>
				<Button title='Add this!' onPress={addTodoHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of todos:</Text>
				{todos.map((input) => (
					<View style={styles.todoItems} key={Math.random() * 10}>
						<Text style={{ color: '#fff' }}>{input}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 15,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 25,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 2,
		borderColor: '#cccccc',
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		marginTop: 10,
		flex: 4,
		alignItems: 'center',
	},
	todoItems: {
		margin: 10,
		padding: 10,
		borderRadius: 10,
		backgroundColor: '#5e0acc',
	},
});
