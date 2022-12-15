class StopWatch {
    constructor(starTime, endTime) {
        this.starTime = starTime;
        this.endTime = endTime;
    }

    getStartTime() {
        return this.starTime
    }

    getEndTime() {
        return this.endTime
    }

    start() {
        let a = new Date();
        this.starTime = a.getTime()
    }

    stop() {
        let b = new Date()
        this.endTime = b.getTime()
    }

    getElapsedTime() {
        return (this.endTime - this.starTime)
    }
}

function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }
    return arr;
}

const arr = []
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
let newStopWatch = new StopWatch()
newStopWatch.start()
selectionSort(arr)
newStopWatch.stop()
console.log((newStopWatch.getElapsedTime()))
