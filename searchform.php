<?php
/*
	Template: searchform.php
*/
?>
<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
    <div>
        <input type="text" value="" name="s" id="s" placeholder="Search for..." />
        <input type="submit" id="searchsubmit" value="Search" />
    </div>
</form>
