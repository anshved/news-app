workflow "Publish on Netlify" {
  on = "push"
  resolves = ["Publish"]
}

action "Publish" {
  uses = "netlify/actions/build@master"
  secrets = [
    "GITHUB_TOKEN",
    "NETLIFY_SITE_ID",
    "940ebc582b1e4205b64ed083e998e723",
  ]
}
