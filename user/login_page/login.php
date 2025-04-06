<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login page</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="login.css">
</head>

<body>
    <div class="login">

        <div class="login-container">
            <span class="icon-close">
                <i class="fa-solid fa-xmark"></i>
            </span>
            <div class="header-login">login</div>
            <div class="login-details">
                <form action="" method="post">
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
                    <div class="remember-forgot">
                        <div>
                            <input type="checkbox" id="u_remember" name="u_remember">
                            <label for="u_remember">Remember me</label>
                        </div>
                        <div>
                            <a href="#" id="forgot-pass">forgotten password</a>
                        </div>
                    </div>
                    <div>
                        <input type="submit" name="u_login" id="u_login" value="login">
                    </div>
                </form> 
                <div class="dont-account">
                    <p>Don't have an account ? </p>
                    <a href="../sing_up/sing-up.php">Register</a>
                </div>

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
    if (isset($_POST['u_login'])) {
        $user_mail = $_POST['u_mail'];
        $user_pass = $_POST['u_pass'];
        $my_con = mysqli_connect("localhost", "root", "", "user");

        if (!$my_con) {
            die("Connection failed: " . mysqli_connect_error());
        }

        try {
            $sql = "SELECT * FROM user_data WHERE u_mail = ? AND password = ?";
            $ps = $my_con->prepare($sql);
            $ps->bind_param("ss", $user_mail, $user_pass);
            $ps->execute();

            $result = $ps->get_result();
            if ($result->num_rows > 0) {
                echo "User found";
                header("Location:../dashboard.html");
                exit(); // Ensure no further code is executed after redirection
            } else {
                echo "No user found";
            }

            $ps->close();
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }

        $my_con->close();
    }
    ?>

</body>

</html>