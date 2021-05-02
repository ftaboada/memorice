import { scaleLinear } from "d3-scale"

export const stringifyTime = (time) => {
    const stringTime = time.toString()
    const len = stringTime.length

    if (len === 4) {
        const result = `${stringTime.substring(0, 3)}.${stringTime.substring(3, 4)}`
        return result
    }
    if (len === 3) {
        const result = `${stringTime.substring(0, 2)}.${stringTime.substring(2, 3)}`
        return result
    }
    if (len === 2) {
        const result = `${stringTime.substring(0, 1)}.${stringTime.substring(1, 2)}`
        return result
    }
    if (len === 1) {
        const result = `0.${stringTime}`
        return result
    }

}

export const ColorRange = (time) => {
    const scale = scaleLinear()
        .domain([3000, 1500, 1200, 0])
        .range(["#7DDE92", "#F9C784", "#EA1D76", "#EF2D56"]);

    return scale(time)
}