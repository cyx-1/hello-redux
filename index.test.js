const { add, increment, decrement, counterStore } = require( "./index" );

// Dispatch actions
counterStore.dispatch(increment()); // counterStore.getState() === 1
const ans = counterStore.getState().count;
test( "test1", () => { expect(ans).toBe(1);});

counterStore.dispatch(increment()); // counterStore.getState() === 2
const ans2 = counterStore.getState().count;
test( "test2", () => { expect(ans2).toBe(2);});

counterStore.dispatch(decrement()); // counterStore.getState() === 1
const ans3 = counterStore.getState().count;
test( "test3", () => { expect(ans3).toBe(1);});

counterStore.dispatch(add(5)); // counterStore.getState() === 6
const ans4 = counterStore.getState().count;
test( "test4", () => { expect(ans4).toBe(6);});
