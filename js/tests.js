// QUnit.test( "hello test", function( assert ) {
//   assert.ok( 1 == "1", "Passed!" );
// });


QUnit.test("setTimeText basics", function (assert) {





    assert.equal(getTimeText(new Date("1977/01/01 22:25:00")), "25 minutes past 10");
    

});