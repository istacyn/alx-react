import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('getFullYear', () => {
    it('should return the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
});

describe('getFooterCopy', () => {
    const trueMessage = 'Holberton School';
    const falseMessage = 'Holberton School main dashboard';
    
    it('should return true footer message', () => {
        const currentMessage = getFooterCopy(true);
        expect(currentMessage).toBe(trueMessage);
    });

    it("should return false footer message", () => {
        const currentMessage = getFooterCopy(false);
        expect(currentMessage).toBe(falseMessage);
    });
});

describe('getLatestNotification', () => {
    it("should return the urgent message text", function() {
        const message = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(message).toBe(getLatestNotification());
      });
});