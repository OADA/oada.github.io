<script type="text/javascript" src="/js/vendor/jquery.min.js"></script>
<script type="text/javascript">
  $(".previewmode").hide();
  var pass = false;
  var prompt_text = "Enter password: ";
  pass = window.prompt(prompt_text);
  if (pass !== 'openag-preview') {
    $(".previewmode").html("<font color='red'>Password incorrect.  Reload to try again.</font>");
  } else {
    // password correct, main.show below will work fine.
  }
  $(".previewmode").show();
</script>
