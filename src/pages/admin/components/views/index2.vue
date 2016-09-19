<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="bs-component">
                <h1>Heading 1</h1>

                <h2>Heading 2</h2>

                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="bs-component">
                <h2>Example body text</h2>

                <p>Nullam quis risus eget <a href="#">urna mollis ornare</a>
                    vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies
                    vehicula.</p>

                <p>
                    <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>

                <p>The following snippet of text is <em>rendered as italicized text</em>.</p>

                <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
            </div>

        </div>
        <div class="col-lg-4">
            <div class="bs-component">
                <h2>Emphasis classes</h2>

                <p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>

                <p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                <p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>

                <p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>

                <p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                <p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>

        </div>
    <div >
        <div class="col-lg-12">
            <div class="page-header">
                <h1 id="tables">Tables</h1>
            </div>


        </div>


        <div class="col-md-6">

            <div>

                <h6 class="mb-2">Bordered Table</h6>

                <!-- $BORDERED TABLE -->
                <!-- ========================================= -->

                <table class="table table-hover table-bordered table-responsive">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>

            </div>

        </div>

        <div class="col-md-6">

            <div>

                <h6 class="mb-2">Striped Table</h6>

                <!-- $STRIPED TABLE -->
                <!-- ========================================= -->

                <table class="table table-striped table-responsive">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>

            </div>

        </div>

</div>

        <div class="bs-docs-section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-header">
                        <h1 id="forms">Forms</h1>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="well bs-component">
                        <form class="form-horizontal">
                            <fieldset>
                                <legend>Legend</legend>
                                <div class="form-group">
                                    <label for="inputEmail" class="col-lg-2 control-label">Email</label>

                                    <div class="col-lg-10">
                                        <input class="form-control" id="inputEmail" placeholder="Email" type="text">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword" class="col-lg-2 control-label">Password</label>

                                    <div class="col-lg-10">
                                        <input class="form-control" id="inputPassword" placeholder="Password" type="password">

                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox"> Checkbox
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="textArea" class="col-lg-2 control-label">Textarea</label>

                                    <div class="col-lg-10">
                                        <textarea class="form-control" rows="3" id="textArea"></textarea>
                                        <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-2 control-label">Radios</label>

                                    <div class="col-lg-10">
                                        <div class="radio">
                                            <label>
                                                <input name="optionsRadios" id="optionsRadios1" value="option1" checked="checked" type="radio">
                                                Option one is this
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input name="optionsRadios" id="optionsRadios2" value="option2" type="radio">
                                                Option two can be something else
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="select" class="col-lg-2 control-label">Selects</label>

                                    <div class="col-lg-10">
                                        <select class="form-control" id="select">
                                            <option selected="selected">1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        <br>
                                        <select multiple="multiple" class="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-lg-10 col-lg-offset-2">
                                        <button type="reset" class="btn btn-default">Cancel</button>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4 col-lg-offset-1">

                    <form class="bs-component">
                        <div class="form-group">
                            <label class="control-label" for="focusedInput">Focused input</label>
                            <input class="form-control" id="focusedInput" value="This is focused..." type="text">
                        </div>

                        <div class="form-group">
                            <label class="control-label" for="disabledInput">Disabled input</label>
                            <input class="form-control" id="disabledInput" placeholder="Disabled input here..." disabled="disabled" type="text">
                        </div>

                        <div class="form-group has-warning">
                            <label class="control-label" for="inputWarning">Input warning</label>
                            <input class="form-control" id="inputWarning" type="text">
                        </div>

                        <div class="form-group has-error">
                            <label class="control-label" for="inputError">Input error</label>
                            <input class="form-control" id="inputError" type="text">
                        </div>

                        <div class="form-group has-success">
                            <label class="control-label" for="inputSuccess">Input success</label>
                            <input class="form-control" id="inputSuccess" type="text">
                        </div>

                        <div class="form-group">
                            <label class="control-label" for="inputLarge">Large input</label>
                            <input class="form-control input-lg" id="inputLarge" type="text">
                        </div>

                        <div class="form-group">
                            <label class="control-label" for="inputDefault">Default input</label>
                            <input class="form-control" id="inputDefault" type="text">
                        </div>

                        <div class="form-group">
                            <label class="control-label" for="inputSmall">Small input</label>
                            <input class="form-control input-sm" id="inputSmall" type="text">
                        </div>

                        <div class="form-group">
                            <label class="control-label">Input addons</label>

                            <div class="input-group">
                                <span class="input-group-addon">$</span>
                                <input class="form-control" type="text">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button">Button</button>
                    </span>
                            </div>
                        </div>
                    </form>

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
                msg:"main2"
            }
        }
    }
</script>

<style lang="less">
</style>
