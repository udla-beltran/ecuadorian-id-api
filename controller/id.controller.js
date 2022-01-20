// Creates controller
const ageController = {};

// Function to check if id is real
ageController.check = (id) => {
	// If the length is different than 10
	if (id.length != 10) return false;
	// Creates temp values
	let [temp1, temp2, temp3] = [0, 0, 0];
	for (let i = 0; i < 9; i++) {
		// Iterates through the even nums and sums total
		if (i % 2 != 0 && i != 0) {
			temp1 += parseInt(id[i]);
		} else {
			// Iterates through odd nums and mult by 2
			temp3 = parseInt(id[i]) * 2;
			// If the result is greater than 9, substract 9
			if (temp3 > 9) temp3 -= 9;
			// Sum the values of odd nums
			temp2 += temp3;
		}
	}
	// Add temp1 and temp2, module of 10
	temp3 = (temp1 + temp2) % 10;
	// If the result is different than 0, subs 10 - numcd s
	if (temp3 != 0) temp3 = 10 - temp3;
	// Returns if num matches last value of id
	return temp3 == id[9];
};

// Controller to verify if id is real
ageController.verify = (req, res) => {
	try {
		return res.status(200).json({
			id: req.params.id,
			real: ageController.check(req.params.id),
		});
	} catch (err) {
		// Handles server error, sends error message
		return res.status(500).json(err.message);
	}
};

// Exports controller
module.exports = ageController;
