// QUnit.test( "hello test", function( assert ) {
//   assert.ok( 1 == "1", "Passed!" );
// });


QUnit.test("getTimeText basics", function (assert) {
	assert.equal(getTimeText(new Date("1977/01/01 00:00:00")), "12 o'clock");
    assert.equal(getTimeText(new Date("1977/01/01 22:25:00")), "25 minutes past 10");
});

QUnit.test("getTimeText complex", function (assert) {
	assert.equal(getTimeText(new Date("1970/01/01 22:37:00")), "25 minutes to 11");
});

QUnit.test("getTimeText ignoreSeconds", function (assert) {
	assert.equal(getTimeText(new Date("1970/01/01 22:36:59")), "25 minutes to 11");
	assert.equal(getTimeText(new Date("1970/01/01 22:37:01")), "25 minutes to 11");
});
