describe("Euler001", function() {
    
    it('exists', function() {
        expect(Euler001).toBeDefined();
    });

    describe("Euler001.doStuff", function() {
        it('exists', function() {
            expect(Euler001.doStuff).toBeDefined();
        });
        it("doStuff() returns 0", function() {
            expect(Euler001.doStuff()).toEqual(0);
        });
        it("doStuff(10) returns 23", function() {
            expect(Euler001.doStuff(10)).toEqual(23);
        });
        it("doStuff(1000) returns 233168", function() {
            expect(Euler001.doStuff(1000)).toEqual(233168);
        });
    });    
    
});