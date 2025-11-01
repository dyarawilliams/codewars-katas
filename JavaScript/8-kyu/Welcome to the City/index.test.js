const sayHello = require('./index');

describe('Welcome to the City', () => {
    it('should welcome a person with their full name, city, and state', () => {
        expect(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')).toBe('Hello, John Smith! Welcome to Phoenix, Arizona!');
        expect(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois')).toBe('Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!');
        expect(sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York')).toBe('Hello, Wallace Russel Osbourne! Welcome to Albany, New York!');
    });
});