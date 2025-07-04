// Mock test for priority feature
describe('Task label', () => {
    test('should set valid label', () => {
        const task = new Task('Test', 'Description');
        expect(task.addLabel('Work')).toBe(true);
        expect(task.label).toBe('work');
    });
});