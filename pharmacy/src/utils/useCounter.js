import { useState } from "react"

function useCounter(minNumber, maxNumber) {
    let [count, setCount] = useState(0)
    function countAdd() {
        if (count < maxNumber) {
            setCount(++count)
        }
    }
    function countReduce() {
        if (count > minNumber) {
            setCount(--count)
        }
    }
    return { count, countAdd, countReduce }
}

export default useCounter;