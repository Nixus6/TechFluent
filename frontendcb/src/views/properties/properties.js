import { React } from "react";
import Cookies from 'universal-cookie'
import './properties.css'
import Navbar from '../../components/navbarP/navbarP'
const cookies = new Cookies();
export const Properties = () => {
    // console.log('id: ' + cookies.get('id'));
    // console.log('document: ' + cookies.get('document'));
    // console.log('name: ' + cookies.get('name'));
    // console.log('lastname: ' + cookies.get('lastname'));
    // console.log('privilege: ' + cookies.get('privilege'));
    // console.log('email: ' + cookies.get('email'));
    const style = {
        position: 'initial',
    };
    return (
        <>
            <Navbar />
            <div class="page-content container note-has-grid">
                <div class="tab-content bg-transparent">
                    <div id="note-full-container" class="note-has-grid row">
                        <div class="col-md-4 single-note-item all-category note-social" >
                            <div class="card card-body">
                                <span class="side-stick"></span>
                                <h5 class="note-title text-truncate w-75 mb-0" data-noteheading="Meeting with Mr.Jojo">Meeting with Mr.Jojo <i class="point fa fa-circle ml-1 font-10"></i></h5>
                                <p class="note-date font-12 text-muted">19 October 2020</p>
                                <div class="note-content">
                                    <p class="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <span class="mr-1"><i class="fa fa-star favourite-note"></i></span>
                                    <span class="mr-1"><i class="fa fa-trash remove-note"></i></span>
                                    <div class="ml-auto">
                                        <div class="category-selector btn-group">
                                            <a class="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                                                <div class="category">
                                                    <div class="category-business"></div>
                                                    <div class="category-social"></div>
                                                    <div class="category-important"></div>
                                                    <span class="more-options text-dark"><i class="icon-options-vertical"></i></span>
                                                </div>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-right category-menu">
                                                <a class="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success" href="javascript:void(0);">
                                                    <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i>Business
                                    </a>
                                                <a class="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info" href="javascript:void(0);">
                                                    <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Social
                                    </a>
                                                <a class="note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger" href="javascript:void(0);">
                                                    <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Important
                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}