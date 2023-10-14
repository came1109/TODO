import { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";

const Form = ({ createTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState("");
    // ダイアログ表示
    const toast = useToast();

    const addTodo = (e) => {
        e.preventDefault();

        // 空白の場合エラー
        if (!enteredTodo) {
            toast({
                title: "新しいタスクを入力してください",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo,
        };

        // TodoにnewTodoを追加
        createTodo(newTodo);

        // enteredTodoを空白にしておく
        setEnteredTodo("");

        // Todo追加されたらダイアログ表示
        toast({
            title: "新しいタスクを追加しました！",
            description: enteredTodo,
            status: "info",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <form onSubmit={addTodo}>
            <HStack>
                <Input
                    placeholder="新しいタスク"
                    _placeholder={{ opacity: "0.3", color: "gray.500" }}
                    size="lg"
                    padding={3}
                    width="80%"
                    // borderColor="Gray"
                    // borderWidth="5px"
                    // borderRadius="6px"
                    bgColor="white"
                    value={enteredTodo}
                    onChange={(e) => setEnteredTodo(e.target.value)}
                />
                <Button
                    colorScheme="blue"
                    size="md"
                    bgColor="white"
                    variant="outline"
                    px={7}
                    type="submit"
                >
                    追加
                </Button>
            </HStack>
        </form>
    );
};

export default Form;
