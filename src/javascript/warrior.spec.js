//import Warrior from './warrior';

describe('Warrior Unit Test', () => {
    let warrior;
    beforeEach(() => {
        warrior = new Warrior('Dave, the Nomad', 100, 'sword');
    });

    it('should return warrior weapon', () => {
        expect(warrior.getWeapon()).toBe('sword');
    });
    it('should decrease warrior health by 10', () => {
        expect(warrior.takeDamage(10)).toBe(90);
    });
});
