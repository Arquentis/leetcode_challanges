const nums = [-5, 3, 7, 9];
const target = 12;

function checkConstraints(_numbers = [], _target = 0) {
	const constraint1 = (_length) => {
		const isValid = 2 <= _length && _length <= 103;
		if (!isValid) console.log("numbers array length must be between 2 and 103");
		return isValid;
	};
	const constraint2 = (_value) => {
		const isValid = -109 <= _value && _value <= 109;
		if (!isValid) console.log(`number must be between -109 and 109. value is ${_value}`);
		return isValid;
	};
	const constraint3 = (_value) => {
		const isValid = -109 <= _value && _value <= 109;
		if (!isValid) console.log(`target must be between -109 and 109. value is ${_value}`);
		return isValid;
	};
	let isAllValid = true;
	for (let index = 0; index < _numbers.length; index++) {
		if (!isAllValid) break;
		const _num = _numbers[index];
		if (!constraint2(_num)) isAllValid = false;
	}

	return isAllValid && constraint1(_numbers.length) && constraint3(_target);
}

if (!checkConstraints(nums, target)) return;

function twoSum(_nums, _index, _target) {
	for (let index = 0; index < _nums.length; index++) {
		if (index == _index) continue;
		const _total = _nums[_index] + _nums[index];
		if (_target === _total) return [_index, index];
	}
	return [];
}

let result = [];
for (let index = 0; index < nums.length; index++) {
	result = twoSum(nums, index, target);
	if (result.length === 2) break;
}
console.log("result:", result);
