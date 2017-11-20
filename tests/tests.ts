import chai = require('chai');
import mocha = require('mocha');
import {Player} from "../src/player";
import {Vector2} from "../src/vector2";

mocha.describe('Player', function() {

    mocha.it('A Player should be of 20 size on instantiation', function() {
        let player = new Player();
        chai.expect(player.getSize()).to.equal(20);
        chai.expect(player.getSize()).to.be.a("number");
    });

    mocha.it('A Player should have a position of (0, 0) on instantiation', function() {
        let player = new Player();
        chai.expect(player.position.x).to.equal(0);
        chai.expect(player.position.y).to.equal(0);
    });

    mocha.it('A Player should reset it\'s position and size on death', function() {
        let player = new Player();
        player.position = new Vector2(-2, 2);
        player.addSize(10);
        player.die();
        chai.expect(player.position.x).to.equal(0);
        chai.expect(player.position.y).to.equal(0);
        chai.expect(player.getSize()).to.equal(20);
    });

});

mocha.describe('Vector2', function() {
    mocha.it('A vector should be of (0, 0) on instantiation', function() {
        let vector = new Vector2();
        chai.expect(vector.x).to.equal(0);
        chai.expect(vector.y).to.equal(0);
    });
});