(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addNewCustomerForm'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"modal_wrapper_new_customer\" class=\"modal_wrapper\">\n  <div id=\"modal_new_customer\" class=\"modal-window\">\n    <div class=\"new_cust_header\">\n      <h3 id=\"new_cust_title\">Add New Customer</h3><br/>\n      <p id=\"new_cust_close\"><a href=\"#\" onclick=\"closeNewCustomerWindow()\">Close[X]</a></p>\n    </div>\n\n    <form id=\"new_customer_form\" method=\"post\">\n      <table>\n        <tbody id=\"new_customer_table\">\n          <tr>\n            <td><label for=\"new_cust_name\" id=\"new_cust_name_label\">*Name:</label></td>\n            <td><input type=\"text\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "\" name=\"new_cust_name\" id=\"new_cust_name\" placeholder=\"Customer Name\" class=\"form-control\"></td>\n            <td class=\"right_col\"><label for=\"new_cust_gender\" id=\"new_cust_gender_label\">Gender:</label></td>\n            <td id=\"new_cust_gender_field\">\n              <label class=\"radio-inline\"><input type=\"radio\" name=\"new_cust_gender\" value=\"Male\">Male</label>\n              <label class=\"radio-inline\"><input type=\"radio\" name=\"new_cust_gender\" value=\"Female\">Female</label>\n            </td>\n          </tr>\n          <tr>\n            <td><label for=\"new_cust_cell_phone\" id=\"new_cust_cell_label\">Cell Phone:</label></td>\n            <td><input type=\"tel\" id=\"new_cust_cell_phone\"  placeholder=\"Cell Phone\" class=\"form-control\"></td>\n            <td><label for=\"new_cust_home_phone\" id=\"new_cust_home_phone_label\" class=\"right_col\">Home Phone:</label></td>\n            <td><input type=\"tel\" id=\"new_cust_home_phone\"  placeholder=\"Home Phone\" class=\"form-control\"></td>\n          </tr>\n          <tr>\n            <td><label for=\"new_cust_email\" id=\"new_cust_email_label\">Email:</label></td>\n            <td><input type=\"email\" id=\"new_cust_email\" placeholder=\"Email\" class=\"form-control\"></td>\n            <td><label for=\"new_cust_address\" id=\"new_cust_address_label\" class=\"right_col\">Home Address:</label></td>\n            <td><input type=\"text\" id=\"new_cust_address\"  placeholder=\"Address\" class=\"form-control\"></td>\n          </tr>\n          <tr>\n            <td><label for=\"new_cust_birthday\">Birthday:</label></td>\n            <td id=\"new_cust_birthday_row\">\n              <input type=\"text\" id=\"new_cust_birthday\" placeholder=\"Month/Day\" class=\"form-control new_cust_birthday_field\" readonly>\n              <input type=\"text\" id=\"new_cust_birthday_year\" class=\"form-control\" placeholder=\"Year\" readonly></td>\n            </td>\n          </tr>\n          <tr>\n            <td><label for=\"new_cust_notes\">Notes:</label></td>\n            <td><textarea name=\"notes\" id=\"new_cust_notes\" class=\"form-control\" rows=\"3\" cols=\"10\"></textarea></td>\n            <td id=\"text_email_notify\" colspan=\"2\">\n              <div id=\"new_cust_notification\">\n                <p id=\"notification_question\">Would this customer like to be notified by</p>\n                <div id=\"notification_options\">\n                  <input type=\"checkbox\" id=\"allow_text_check\" name=\"allowText\" value=\"true\">Text<br><br>\n                  <input type=\"checkbox\" id=\"allow_email_check\" name=\"allowEmail\" value=\"true\">Email\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div class=\"new_cust_more_fields\">\n        <p>* indicates a required field</p>\n        <div id=\"make_appt_new_cust_question\">\n          <p>Make appointment with this new customer?</p>\n          <input type=\"checkbox\" id=\"make_appt_new_cust\">Yes\n        </div>\n      </div>\n\n      <button type=\"button\" class=\"btn_default_cb\" onclick=\"addNewCustomer()\" id=\"addNewCustomerButton\">Add Customer</button>\n      <button type=\"button\" class=\"btn_default_cb\" id=\"clearNewCustFieldsButton\" onclick=\"clearAddNewCustomerFields()\">Clear Fields</button>\n      <button type=\"button\" class=\"btn_default_cb\" id=\"closeNewCustButton\" onclick=\"closeNewCustomerWindow()\">Close</button>\n\n      <div>\n        <!--TO-DO: Fix these so they are all block-->\n        <p id=\"reqrd_fields_msg\" class=\"error_msg new_customer_error_msgs\">Please enter all required fields</p>\n        <p id=\"invalid_email_msg\" class=\"error_msg new_customer_error_msgs\">Please enter a valid email address</p>\n        <p id=\"needs_email_msg\" class=\"error_msg new_customer_error_msgs\">Note: The customer needs an email address</p>\n        <p id=\"needs_cell_msg\" class=\"error_msg new_customer_error_msgs\">Note: The customer needs a cell phone number</p>\n      </div>\n      <div id=\"add_customer_results\"></div>\n    </form>\n  </div>\n</div>\n";
},"useData":true});
templates['settingsModal'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <li>"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"Name","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"modal_wrapper_settings\" class=\"modal_wrapper\">\n  <div id=\"settings-modal\" class=\"modal-window\">\n    <div class=\"group\">\n      <h3 id=\"settings-header\">Settings</h3>\n      <a id=\"settings-close\" href=\"#\" onclick=\"closeSettings()\">Close[X]</a>\n    </div>\n\n    <div class=\"employee-lists group\">\n      <div id=\"non-unit\" class=\"employee-sections\">\n        <ul id=\"non-unit-employees\" class=\"employee-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.nullUnitEmployees : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </div>\n      <div id=\"unit\" class=\"employee-sections\">\n        <ul id=\"unit-employees\" class=\"employee-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.unitEmployees : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n      </div>\n    </div>\n\n    <div id=\"new-employee-section\">\n      <h4>Add Employee</h4>\n      <form id=\"new-employee-form\" onsubmit=\"return submitNewEmployee()\">\n        <fieldset class=\"form-group\">\n            <input type=\"text\" class=\"form-control new-emp-field\" id=\"new-employee-name\"\n                    name=\"name\" placeholder=\"Name\">\n        </fieldset>\n\n        <fieldset class=\"form-group\">\n            <input type=\"text\" class=\"form-control new-emp-field\" id=\"new-employee-cell\"\n                    name=\"cellphonenumber\" placeholder=\"Cell Number\">\n        </fieldset>\n\n        <input type=\"submit\" id=\"add-employee-btn\" class=\"btn btn-primary\" value=\"Add Employee\">\n      </form>\n\n      <p id=\"new-employee-error\" class=\"non-hidden-error-msg\"></p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();
