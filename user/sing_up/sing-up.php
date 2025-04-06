<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register page</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../login_page/login.css">
    <link rel="stylesheet" href="../sing_up/sing-up.css">
</head>

<body>
    <div class="login">

        <div class="login-container">
            <span class="icon-close">
                <i class="fa-solid fa-xmark"></i>
            </span>
            <div class="header-login">register</div>
            <div class="login-details">
                <form action="#" method="post">
                    <div>
                        <div class="label-data">
                            <label for="u_mail">Full Name:</label>
                        </div>
                        <div class="input-data">
                            <input type="text" name="u_name" id="u_name">
                        </div>
                    </div>
                    <div>
                        <div class="label-data">
                            <label for="u_mail">Phone no:</label>
                        </div>
                        <div class="input-data">
                            <input type="number" max="9999999999" min="1000000000" name="u_phone" id="u_phone">
                        </div>
                    </div>
                    <div>
                        <div class="label-data">
                            <label for="u_mail">Email:</label>
                        </div>
                        <div class="input-data">
                            <input type="text" name="u_mail" id="u_mail">
                        </div>
                    </div>
                    <div>
                        <div class="label-data">
                            <label for="u_pass">Password:</label>
                        </div>
                        <div class="input-data">
                            <input type="password" name="u_pass" id="u_pass">

                        </div>
                    </div>

                    <div style="margin-top: 1rem;">
                        <input type="submit" name="u_register" id="u_login" value="register">
                    </div>
                    <div class="dont-account" style="margin-top: 1rem;">
                        <p>already have an account ? </p>
                        <a href="../login_page/login.php">login</a>
                    </div>
                </form>
            </div>
        </div>
    </div>








    <!-- 
    <form action="#" method="post">
        first name:<input type="text" name="u_f_name">
        last name:<input type="text" name="u_l_name">
        password:<input type="password" name="u_pass">
        <input type="submit" name="submit">
    </form> -->
    <?php



    if (isset($_POST['u_register'])) {
        $user_name=$_POST['u_name'];
        $user_phone=$_POST['u_phone'];
        $user_mail = $_POST['u_mail'];
        $user_pass = password_hash($_POST['u_pass'], PASSWORD_BCRYPT);

        // Establish a database connection
        $my_con = mysqli_connect("localhost", "root", "", "user");

        // Check connection
        if (!$my_con) {
            die("Connection failed: " . mysqli_connect_error());
        }
        echo "Connection successful";

        // Prepare an SQL statement
        $sql = "INSERT INTO user_data (first_name,u_mail, password) VALUES (?,?, ?)";
        $stmt = $my_con->prepare($sql);

        if ($stmt) {
            // Bind parameters
            $stmt->bind_param("sss",$user_name, $user_mail, $user_pass);

            // Execute the statement
            if ($stmt->execute()) {
                echo "One record added";
            } else {
                echo "Error: " . $stmt->error;
            }
            $stmt->close();
        } else {
            echo "Error preparing statement: " . $my_con->error;
        }

        // Close the connection
        mysqli_close($my_con);
    }


    ?>
</body>

</html>