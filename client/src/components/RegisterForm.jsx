import React from 'react'

const RegisterForm = () => {
    return (
        <div>
            <form asp-action="CreateUser" method="post" class="shadow p-3 rounded">
                <div class="row">
                    <div class='col p-2 text-center'>
                        <span class=" input-group-text bg-dark bg-gradient text-light border-dark mb-2" asp-for="Email">Email :</span>
                        <input type="text" asp-for="Email" class="form-control" />
                        <span asp-validation-for="Email" class="text-danger"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col p-2 text-center">
                        <span class="input-group-text bg-dark bg-gradient text-light border-dark mb-2" asp-for="Password">Password :</span>
                        <input type="password" asp-for="Password" class="form-control" />
                        <span asp-validation-for="Password" class="text-danger"></span>
                    </div>
                    <div class="col p-2 text-center">
                        <span class="input-group-text bg-dark bg-gradient text-light border-dark mb-2" asp-for="ConfirmPassword">Confirm Password :</span>
                        <input type="password" asp-for="PasswordConfirm" class="form-control" />
                        <span asp-validation-for="PasswordConfirm" class="text-danger"></span>
                    </div>
                </div>
                <div class='d-flex justify-content-end'>
                    <button type="submit" class='btn btn-dark bg-gradient text-light'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm