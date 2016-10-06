var expect = require('chai').expect;
var checkTamGiac = require('../src/index.js');

describe('XacDinhTamGiac', function() {

	describe('xacDinhTamGiac()', function() {
		it('Khong phai tam giac', function(done) {
			checkTamGiac.xacDinhTamGiac(1, 2, 3, function(err, rs) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('Khong phai tam giac');
				done();
			});
		});

		it('Tam giac deu', function(done) {
		    checkTamGiac.xacDinhTamGiac(5, 5, 5, function(err, rs) {
		    	expect(err).to.equal(null);
		    	expect(rs).to.equal(3);
		    	done();
		    });
	  	});

		it('Tam giac can', function(done) {
		    checkTamGiac.xacDinhTamGiac(5, 5, 9, function(err, rs) {
		    	expect(err).to.equal(null);
		    	expect(rs).to.equal(2);
		    	done();
		    });
	  	});

	  	it('Tam giac can', function(done) {
		    checkTamGiac.xacDinhTamGiac(2, 2, 3, function(err, rs) {
		    	expect(err).to.equal(null);
		    	expect(rs).to.equal(2);
		    	done();
		    });
	  	});

	  	it('Tam giac vuong', function(done) {
		    checkTamGiac.xacDinhTamGiac(3, 4, 5, function(err, rs) {
		    	expect(err).to.equal(null);
		    	expect(rs).to.equal(4);
		    	done();
		    });
	  	});

	});
});