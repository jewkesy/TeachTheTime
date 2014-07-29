QUnit.test("getTimeText basics", function (assert) {
	assert.equal(getTimeText(new Date("1977/01/01 06:00:00")), "6 o'clock");
	assert.equal(getTimeText(new Date("1977/01/01 03:00:00")), "3 o'clock");

	assert.equal(getTimeText(new Date("1977/01/01 03:45:00")), "quarter to 4");
	assert.equal(getTimeText(new Date("1977/01/01 07:15:00")), "quarter past 7");
    
    assert.equal(getTimeText(new Date("1977/01/01 02:30:00")), "half past 2");
    assert.equal(getTimeText(new Date("1977/01/01 08:30:00")), "half past 8");
});

QUnit.test("getTimeText complex", function (assert) {
	assert.equal(getTimeText(new Date("1977/01/01 01:05:00")), "5 minutes past 1");
	assert.equal(getTimeText(new Date("1977/01/01 01:55:00")), "5 minutes to 2");

	assert.equal(getTimeText(new Date("1977/01/01 02:10:00")), "10 minutes past 2");
	assert.equal(getTimeText(new Date("1977/01/01 02:50:00")), "10 minutes to 3");

	assert.equal(getTimeText(new Date("1977/01/01 03:20:00")), "20 minutes past 3");
	assert.equal(getTimeText(new Date("1970/01/01 03:40:00")), "20 minutes to 4");

	assert.equal(getTimeText(new Date("1977/01/01 10:25:00")), "25 minutes past 10");
	assert.equal(getTimeText(new Date("1970/01/01 22:37:00")), "25 minutes to 11");
});

QUnit.test("getTimeText ignoreSeconds", function (assert) {
	assert.equal(getTimeText(new Date("1970/01/01 04:36:59")), "25 minutes to 5");
	assert.equal(getTimeText(new Date("1970/01/01 04:37:01")), "25 minutes to 5");
});

QUnit.test("getTimeText ignoreTwentyFourHour", function (assert) {
	assert.equal(getTimeText(new Date("1970/01/01 23:26:59")), "25 minutes past 11");
	assert.equal(getTimeText(new Date("1970/01/01 22:36:59")), "25 minutes to 11");
});

QUnit.test("getTimeText handleTwelve", function (assert) {
	assert.equal(getTimeText(new Date("1977/01/01 00:00:00")), "12 o'clock");
	assert.equal(getTimeText(new Date("1977/01/01 12:00:00")), "12 o'clock");
	assert.equal(getTimeText(new Date("1977/01/01 11:55:00")), "5 minutes to 12");
	assert.equal(getTimeText(new Date("1977/01/01 23:55:00")), "5 minutes to 12");
	
	assert.equal(getTimeText(new Date("1977/01/01 00:10:00")), "10 minutes past 12");
	assert.equal(getTimeText(new Date("1977/01/01 12:10:00")), "10 minutes past 12");
});