const helloWorld = require('./index.js');

describe('helloWorld', () => {
    it('should be a function', () => {
        expect(typeof helloWorld).toBe('function');
    });

    it('should log "Hello World!" to the console', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        helloWorld();
        expect(consoleSpy).toHaveBeenCalledWith('Hello World!');
        consoleSpy.mockRestore();
    });
});