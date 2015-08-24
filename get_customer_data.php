<!DOCTYPE html>
<html>
	<head>
	</head>

	<body>
		<?php
			/*
			This PHP script will be run when the user is searching for a customer.
			A query will be run to retireve customer information based on the name enetered by the user. If there is one customer returned,
			then that customer's information (name, number, email) will be displayed, along with their visit history. 
			If no results are returned, the user is prompted if they want to add a new user.
			If multiple results are returned, then a modal window appears with the results, and the user can select which customer to 
			schedule the appointment with.
			*/
			require_once("common.php");
			require_once("Scheduler.php");

			$connection = connect();

			$name = $_POST['name'];

			try{

				$rs = Customer::getCustomerInfo($name);
				$numResults = count($rs);

				//If there is one customer match, then show information, and history for that customer
				if($numResults == 1) {
					echo "<div class=\"customer-history\">";
						//show customer info (name, cell, and email)
						echo "<div class=\"customer-info form-inline\">";
						foreach ($rs as $customer) {
							echo "<b>Phone:</b> <input type=\"text\" class=\"edit-cust-info-field form-control\" id=\"edit-cust-info-phone\" value=\"" . $customer['CellPhoneNumber'] . "\" disabled><br>";
							echo "<b>Email:</b> <input type=\"text\" class=\"edit-cust-info-field form-control\" id=\"edit-cust-info-email\" value=\"" . $customer['EmailAddress'] . "\" disabled><br>";
						}
							echo "<span>";
								echo "<a id=\"edit-cust-info-btn\" onclick=\"editCustInfo()\"><b>Edit Info</b></a>";
								//echo "<button type=\"button\" class=\"btn_edit_cust_info btn_default_cb\" onclick=\"editCustInfo()\">Edit Info</button>";
								echo "<button type=\"button\" class=\"btn_edit_cust_info btn_default_cb\" id=\"btn_save_cust_info\" onclick=\"updateCustomerInfo()\">Save</button><br><br>";
							echo "</span>";
						echo "</div>";
						//echo "<p><a id=\"cust-history-close\">Close[x]</a></p>";

						/*Need to set the value of the customer_name text field to be
						the returned name from the search, otherwise the user can make appointment
						with partial name that returned one match. 
						This <scirpt> tag is inserted into the DOM, but is actually executed in the 
						customerSearch() function after the result is returned. Loading script tags into
						the DOM does not execute them.
						*/ 
						$returnedCustomerName = $rs[0]['Name'];
						echo "<script>".
								"document.getElementById(\"customer_name\").value=\"" . $returnedCustomerName . "\";" . 
							"</script>";
					
					//also show customer history
					$customerHistory = Customer::getCustomerHistory($returnedCustomerName);
					$numVisits = count($customerHistory);

					//only show this table if the customer has visited before
					//could be a new customer with no history
					//if($numVisits > 0){
						echo "<table class=\"customer-history-table\">";
							echo "<thead>";
								echo "<tr>";
									echo "<th id=\"date-head\">Date</th>";
									echo "<th id=\"emp-head\">Employee</th>";
									echo "<th id=\"service-head\">Service</th>";
									//echo "<th></th>";
								echo "</tr>";
							echo "</thead>";
							echo "<tbody>";
							foreach ($customerHistory as $visit) {
								echo "<tr>";
									//TO-DO: change format of date? Currently is YYYY-MM-DD
									echo "<td>" . $visit['Appt_Date'] . "</td>";
									echo "<td>" . $visit['EmpName'] . "</td>";
									echo "<td>" . $visit['ServiceName'] . "</td>";
								echo "</tr>";
							}
								echo "<tr>";
									echo "<td><a href=\"#\" colspan=\"2\">View All History</a></td>";
									echo "<td></td>";
									echo "<td><a id=\"cust-history-close\"><b>Close[x]</b></a></td>";
								echo "</tr>";
							echo "</tbody>";
						echo "</table>";
					
					echo "</div>";

				}
				//No results returned, or if the name entered is empty
				else if (($numResults == 0) || (empty($name)) ){
					echo "<div id=\"no-customer-returned\">";
						echo "<p>This search returned no customers. Would you like to add a new customer?</p>";
						echo "<div class=\"btn-group\" role=\"group\">";
							echo "<button type=\"button\" class=\"btn_default_cb no-cust-btn\" id=\"no-cust-btn-yes\" onclick=\"toggleAddNewCustomerWindow()\">Yes</button>";
							echo "<button type=\"button\" class=\"btn_default_cb no-cust-btn\" id=\"no-cust-btn-no\">No</button>";
						echo "</div>";
					echo "</div>";
				}
				//If multiple results, show results in modal window
				//TO-DO: Allow user to navigate through results if more than 10 are returned
				else{
					echo "<div id=\"modal_wrapper_cust_search_results\" class=\"modal_wrapper\">";
						echo "<div id=\"modal_cust_search_results\">";
							echo "<div id=\"cust_search_results_header\">";
								echo "<h4>Search Results for  " . $name . "</h4>";
								//echo "<p id=\"cust_search_results_close\"><a href=\"#\" onclick=\"closeCustSearchResults()\">close</a></p>";
							echo "</div>";

							echo "<table id=\"cust_search_results_table\">";
								echo "<tbody>";								
									foreach ($rs as $customer) {
										echo "<tr class=\"cust-search-row\">";
											echo "<td><input type=\"radio\" name=\"cust_name\" value=\"". $customer['Name'] ."\"></td>";
											echo "<td>" . $customer['Name'] . "</td>";
											echo "<td>" . $customer['CellPhoneNumber'] . "</td>";
											echo "<td>" . $customer['HomePhoneNumber'] . "</td>";
											echo "<td>" . $customer['EmailAddress'] . "</td>";
											echo "<td>" . $customer['HomeAddress'] . "</td>";
											echo "<td>" . $customer['Birthday'] . "</td>";
										echo "</tr>";
									}
								echo "</tbody>";
							echo "</table>";

							echo "<button type=\"button\" id=\"select_cust_results_btn\" class=\"btn_default_cb cust_results_btn\" onclick=\"selectCustomer()\">Select</button>";
							//echo "<button type=\"button\" id=\"edit_cust_results_btn\" class=\"btn_default_cb cust_results_btn\">Edit</button>";
							echo "<button type=\"button\" class=\"btn_default_cb cust_results_btn\" onclick=\"closeCustSearchResults()\">Close</button>";
							echo "<p id=\"no_cust_selected_msg\" class=\"fields_missing_msg\">Please select a customer</p>";

						echo "</div>";
					echo "</div>";
				}

			}
			catch(PDOException $e){
				disconnect($connection);
				die("Failure in get_customer_data.php: " . $e->getMessage());
			}

			disconnect($connection);
		?>
	</body>
</html>