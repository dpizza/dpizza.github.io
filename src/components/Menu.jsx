import React from 'react';

const Menu = () => (    
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">D'Pizza</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><a href="#menu">Menu</a></li>
                    <li className="active"><a href="#pizzas">Pizzas<span className="sr-only">(current)</span></a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a data-toggle="modal" data-target="#ordena">Ordena</a>
                    </li>
                    <li><a data-toggle="modal" data-target="#horarios">Horarios</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Menu;
