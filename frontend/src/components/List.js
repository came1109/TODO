import { VStack, StackDivider, HStack, IconButton, Text } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

const List = ({ todos, deleteTodo }) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
            divider={<StackDivider />}
            width="80%"
            bgColor="White"
            // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600' }}
            borderColor="Gray 300"
            borderWidth="5px"
            borderRadius="6px"
            padding={4}
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing="10">
                        <IconButton
                            onClick={() => complete(todo.id)}
                            isRound
                            // variant='solid'
                            // colorScheme='blue'
                            opacity="0.5"
                            bgColor="cyan.100"
                            // aria-label='Done'
                            fontSize='20px'
                            icon={<VscCheck />}
                        >完了
                        </IconButton>
                        <Text>{todo.content}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;