const describe = (desc, fn) => {
	console.log(desc);
	fn();
};

const it = (msg, fn) => describe('  ' + msg, fn);

const matchers = (exp) => ({
	toBe: (asssertion) => {
		if (exp === asssertion) {
			console.log('pass');
			return true;
		} else {
			console.log('fail');
			return false;
		}
	}
});

const expect = (exp) => matchers(exp);


module.exports = {
	describe,
	expect,
	it,
	matchers
};
