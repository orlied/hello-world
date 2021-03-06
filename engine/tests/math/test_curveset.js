module("pc.CurveSet");



test("constructor: array of arrays", function () {

    var c = new pc.CurveSet([[0, 0, 1, 1], [0,0]]);

    QUnit.equal(c.length, 2);

});



test("constructor: with number", function () {

    var c = new pc.CurveSet(3);

    QUnit.equal(c.length, 3);

});



test("constructor: no args", function () {

    var c = new pc.CurveSet();

    QUnit.equal(c.length, 1);

});



test("value", function () {

    var c = new pc.CurveSet([0, 0, 1, 1], [0, 0, 1, 1]);

    c.type = pc.CURVE_LINEAR;

    QUnit.equal(c.value(0.5)[0], 0.5);

    QUnit.equal(c.value(0.5)[1], 0.5);

});



test("get", function () {

    var c = new pc.CurveSet([0, 1], [1, 2]);



    QUnit.equal(c.get(0).get(0)[1], 1);

    QUnit.equal(c.get(1).get(0)[1], 2);

});
