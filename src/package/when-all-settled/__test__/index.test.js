/* eslint-env jest */

import whenAllSettled from '../src'

describe('whenAllSettled', () => {
    test('should log errors via console.error if no rejection handler is provided', async () => {
        const promises = [
            Promise.reject(new Error('Failed Promise')),
        ]
        console.error = jest.fn()
        await whenAllSettled(promises)
        expect(console.error).toHaveBeenCalledWith(new Error('Failed Promise'))
    })

    test('should resolve even when some promises are rejected', () => {
        const promises = [
            Promise.resolve(),
            Promise.reject(new Error('Failed Promise')),
        ]
        const rejectHandler = jest.fn()
        const thenableFunc = jest.fn()
        const errorFunc = jest.fn()
        whenAllSettled(promises, {onRejection: rejectHandler}).then(thenableFunc()).catch(errorFunc())
        expect(thenableFunc).toHaveBeenCalledTimes(1)
    })

    test('should not call rejection handler when all promises resolve', async () => {
        const promises = [
            Promise.resolve(),
            Promise.resolve(),
            Promise.resolve(),
        ]
        const rejectHandler = jest.fn()
        await whenAllSettled(promises, {onRejection: rejectHandler})
        expect(rejectHandler).toHaveBeenCalledTimes(0)
    })

    test('should call rejection handler for each promise that is rejected', async () => {
        const promises = [
            Promise.resolve(),
            Promise.reject(new Error('Failed Promise')),
            Promise.reject(new Error('Failed Promise')),
        ]
        const rejectHandler = jest.fn()
        await whenAllSettled(promises, {onRejection: rejectHandler})
        expect(rejectHandler).toHaveBeenCalledTimes(2)
    })
})
