<?php
	//This PHP script will query the database for a customer's phone number
	//The phone number is to be displayed in the title of the quick info content
	//allowing the user to easily see the customer's phone number
	require_once("Customer.php");
	require_once("config.php");

	$customerID = $_POST['cust_ID'];

	$cellPhoneNumber = Customer::getCustomerCellPhoneNumber($customerID);
	if(strlen($cellPhoneNumber) >= 1){
		echo $cellPhoneNumber;
	}
	//no phone returned, no customer exists
	else{
		error_log("nothing returned from query");
	}

?>
