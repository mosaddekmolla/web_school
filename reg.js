<script type="text/javascript">
				<form id="form" name="reg">
					<h3>Please Input Your Information</h3>
					<br/>

					<div id="form1">


					<input  type="text" name="fname" placeholder="Please Enter First Name:">
      				<br/>
      				<input  type="text" name="lname" placeholder="Please Enter Last Name:">
      				<br/>
      				<input  type="text" name="email" placeholder="Please Enter Email:">
      				<br/>
      				<input  type="text" name="pass" placeholder="Please Enter Password:">
      				<br/>
      				<button  type="button" onclick="input()">Registration</button>
      				</div>


				</form>
				
				
</script>


<script type="text/javascript">
	
    function input(){

      var fname = document.reg.fname.value;
      var lname = document.reg.lname.value;
      var email = document.reg.pass.value;
      var pass = document.log_in.email.value;

    }

</script>

