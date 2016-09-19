<template>
    <div class="row">
        <p class="bs-component">
            <a href="#" class="btn btn-default">Default</a>
            <a href="#" class="btn btn-primary">Primary</a>
            <a href="#" class="btn btn-success">Success</a>
            <a href="#" class="btn btn-info">Info</a>
            <a href="#" class="btn btn-warning">Warning</a>
            <a href="#" class="btn btn-danger">Danger</a>
            <a href="#" class="btn btn-link">Link</a>
        </p>

        <p class="bs-component">
            <a href="#" class="btn btn-default disabled">Default</a>
            <a href="#" class="btn btn-primary disabled">Primary</a>
            <a href="#" class="btn btn-success disabled">Success</a>
            <a href="#" class="btn btn-info disabled">Info</a>
            <a href="#" class="btn btn-warning disabled">Warning</a>
            <a href="#" class="btn btn-danger disabled">Danger</a>
            <a href="#" class="btn btn-link disabled">Link</a>
        </p>


        <div style="margin-bottom: 15px;">
            <div class="btn-toolbar bs-component" style="margin: 0;">
                <div class="btn-group">
                    <a href="#" class="btn btn-default">Default</a>
                    <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>

                <div class="btn-group">
                    <a href="#" class="btn btn-primary">Primary</a>
                    <a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>

                <div class="btn-group">
                    <a href="#" class="btn btn-success">Success</a>
                    <a href="#" class="btn btn-success dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>

                <div class="btn-group">
                    <a href="#" class="btn btn-info">Info</a>
                    <a href="#" class="btn btn-info dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>

                <div class="btn-group">
                    <a href="#" class="btn btn-warning">Warning</a>
                    <a href="#" class="btn btn-warning dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <p class="bs-component">
            <a href="#" class="btn btn-primary btn-lg">Large button</a>
            <a href="#" class="btn btn-primary">Default button</a>
            <a href="#" class="btn btn-primary btn-sm">Small button</a>
            <a href="#" class="btn btn-primary btn-xs">Mini button</a>
        </p>
        <div >

            <p class="bs-component">
                <a href="#" class="btn btn-default btn-lg btn-block">Block level button</a>
            </p>


            <div class="bs-component" style="margin-bottom: 15px;">
                <div class="btn-group btn-group-justified">
                    <a href="#" class="btn btn-default">Left</a>
                    <a href="#" class="btn btn-default">Middle</a>
                    <a href="#" class="btn btn-default">Right</a>
                </div>
            </div>

            <div class="bs-component" style="margin-bottom: 15px;">
                <div class="btn-toolbar">
                    <div class="btn-group">
                        <a href="#" class="btn btn-default">1</a>
                        <a href="#" class="btn btn-default">2</a>
                        <a href="#" class="btn btn-default">3</a>
                        <a href="#" class="btn btn-default">4</a>
                    </div>

                    <div class="btn-group">
                        <a href="#" class="btn btn-default">5</a>
                        <a href="#" class="btn btn-default">6</a>
                        <a href="#" class="btn btn-default">7</a>
                    </div>

                    <div class="btn-group">
                        <a href="#" class="btn btn-default">8</a>

                        <div class="btn-group">
                            <a href="#" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                Dropdown
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Dropdown link</a></li>
                                <li><a href="#">Dropdown link</a></li>
                                <li><a href="#">Dropdown link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bs-component">
                <div class="btn-group-vertical">
                    <a href="#" class="btn btn-default">Button</a>
                    <a href="#" class="btn btn-default">Button</a>
                    <a href="#" class="btn btn-default">Button</a>
                    <a href="#" class="btn btn-default">Button</a>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-lg-12">
                <h1 id="sbuttons">Social Buttons</h1>
            </div>
            <div class="col-md-12">

                <a class="btn-social btn-behance" href="#"><i class="fa fa-behance"></i></a>
                <a class="btn-social btn-bitbucket" href="#"><i class="fa fa-bitbucket"></i></a>
                <a class="btn-social btn-codepen" href="#"><i class="fa fa-codepen"></i></a>
                <a class="btn-social btn-deviantart" href="#"><i class="fa fa-deviantart"></i></a>
                <a class="btn-social btn-digg" href="#"><i class="fa fa-digg"></i></a>
                <a class="btn-social btn-dribbble" href="#"><i class="fa fa-dribbble"></i></a>
                <a class="btn-social btn-dropbox" href="#"><i class="fa fa-dropbox"></i></a>
                <a class="btn-social btn-facebook" href="#"><i class="fa fa-facebook"></i></a>
                <a class="btn-social btn-flickr" href="#"><i class="fa fa-flickr"></i></a>
                <a class="btn-social btn-foursquare" href="#"><i class="fa fa-foursquare"></i></a>
                <a class="btn-social btn-github" href="#"><i class="fa fa-github-alt"></i></a>
                <a class="btn-social btn-google-plus" href="#"><i class="fa fa-google-plus"></i></a>
                <a class="btn-social btn-instagram" href="#"><i class="fa fa-instagram"></i></a>
                <a class="btn-social btn-jsfiddle" href="#"><i class="fa fa-jsfiddle"></i></a>
                <a class="btn-social btn-lastfm" href="#"><i class="fa fa-lastfm"></i></a>
                <a class="btn-social btn-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                <a class="btn-social btn-paypal" href="#"><i class="fa fa-paypal"></i></a>
                <a class="btn-social btn-pinterest" href="#"><i class="fa fa-pinterest"></i></a>
                <a class="btn-social btn-reddit" href="#"><i class="fa fa-reddit"></i></a>
                <a class="btn-social btn-skype" href="#"><i class="fa fa-skype"></i></a>
                <a class="btn-social btn-soundcloud" href="#"><i class="fa fa-soundcloud"></i></a>
                <a class="btn-social btn-stack-overflow" href="#"><i class="fa fa-stack-overflow"></i></a>
                <a class="btn-social btn-steam" href="#"><i class="fa fa-steam"></i></a>
                <a class="btn-social btn-stumbleupon" href="#"><i class="fa fa-stumbleupon"></i></a>
                <a class="btn-social btn-trello" href="#"><i class="fa fa-trello"></i></a>
                <a class="btn-social btn-tumblr" href="#"><i class="fa fa-tumblr"></i></a>
                <a class="btn-social btn-twitch" href="#"><i class="fa fa-twitch"></i></a>
                <a class="btn-social btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
                <a class="btn-social btn-vimeo" href="#"><i class="fa fa-vimeo-square"></i></a>
                <a class="btn-social btn-vine" href="#"><i class="fa fa-vine"></i></a>
                <a class="btn-social btn-vk" href="#"><i class="fa fa-vk"></i></a>
                <a class="btn-social btn-wechat" href="#"><i class="fa fa-wechat"></i></a>
                <a class="btn-social btn-wordpress" href="#"><i class="fa fa-wordpress"></i></a>
                <a class="btn-social btn-xing" href="#"><i class="fa fa-xing"></i></a>
                <a class="btn-social btn-yahoo" href="#"><i class="fa fa-yahoo"></i></a>
                <a class="btn-social btn-yelp" href="#"><i class="fa fa-yelp"></i></a>
                <a class="btn-social btn-youtube" href="#"><i class="fa fa-youtube"></i></a>
                <a class="btn-social btn-email" href="#"><i class="fa fa-envelope"></i></a>
            </div>
            <div class="col-md-12">
                <h4>Sizes</h4>
                <a class="btn-social btn-twitter btn-xs" href="#"><i class="fa fa-twitter"></i></a>
                <a class="btn-social btn-twitter btn-sm" href="#"><i class="fa fa-twitter"></i></a>
                <a class="btn-social btn-twitter" href="#"><i class="fa fa-twitter"></i></a>
                <a class="btn-social btn-twitter btn-lg" href="#"><i class="fa fa-twitter"></i></a>

            </div>

        </div>

        <div class="row">
            <div class="col-lg-4">
                <h2>Labels</h2>

                <div class="bs-component" style="margin-bottom: 40px;">
                    <span class="label label-default">Default</span>
                    <span class="label label-primary">Primary</span>
                    <span class="label label-success">Success</span>
                    <span class="label label-warning">Warning</span>
                    <span class="label label-danger">Danger</span>
                    <span class="label label-info">Info</span>
                </div>
            </div>
            <div class="col-lg-4">
                <h2>Badges</h2>

                <div class="bs-component">
                    <ul class="nav nav-pills">
                        <li class=""><a href="#">Home <span class="badge">42</span></a></li>
                        <li><a href="#">Profile <span class="badge"></span></a></li>
                        <li><a href="#">Messages <span class="badge">3</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return {
                msg:"main"
            }
        }
    }
</script>

<style lang="less">
</style>
