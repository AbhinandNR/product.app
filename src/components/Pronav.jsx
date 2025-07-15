import React from 'react'
import { Link } from 'react-router-dom'

const Pronav = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid bg-danger">
                    <Link class="navbar-brand" to="/View">Product</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="/View">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Add Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Search">Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/View">view All</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Delete">Delete Product</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>





        </div>
    )
}

export default Pronav