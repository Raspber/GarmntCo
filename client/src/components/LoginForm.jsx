import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <form asp-action="LoginUser" method="post" class="shadow p-3 rounded">
                <div class="row">
                    <div class="col p-2 text-center">
                        <span class="input-group-text bg-success bg-gradient text-light border-success mb-2" asp-for="EmailLogin">Email :</span>
                        <input type="text" asp-for="LEmail" class="form-control"/>
                    </div>
                    <div class="col p-2 text-center">
                        <span class="input-group-text bg-success bg-gradient text-light border-success mb-2" asp-for="PasswordLogin">Password :</span>
                        <input type="password" asp-for="LPassword" class="form-control"/>
                    </div>
                </div>
                <span asp-validation-for="LEmail" class="text-danger d-block text-center"></span>
                <span asp-validation-for="LPassword" class="text-danger d-block text-center"></span>
                <div class='d-flex justify-content-end'>
                    <button type="submit" class='btn btn-success bg-gradient text-light'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm