import { selector, selectorFamily } from "recoil";
import { currentWhaleIdState, todoListFilterState, todoListState } from "./atoms";

const filteredTodoListState = selector({
    key: 'FilteredTodoList',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                console.log('Show Completed')
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                console.log('Show Uncompleted')
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});

const todoListStatsState = selector({
    key: 'TodoListStats',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});

const currentWhaleTypesQuery = selector({
    key: 'CurrentWhaleTypesQuery',
    get: async () => {
        const response = await fetch('http://localhost:3001/whaleTypes',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
        return await response.json()
    }
})

const whaleInfoQuery = selectorFamily({
    key: 'WhaleInfoQuery',
    get: whaleId => async () => {
        if (whaleId === '') return undefined
        const url = 'http://localhost:3001/whales/' + String(whaleId)
        const response = await fetch(url)
        return await response.json()
    }
})

const currentWhaleQuery = selector({
    key: 'CurrentWhaleQuery',
    get: ({ get }) =>
        get(whaleInfoQuery(get(currentWhaleIdState)))
})

export {
    filteredTodoListState,
    todoListStatsState,
    currentWhaleTypesQuery,
    whaleInfoQuery,
    currentWhaleQuery
}