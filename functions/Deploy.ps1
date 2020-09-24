<#
    Snippet to run this script:
    -firebBaseToken 1//0dZb0O_XivzwxCgYIARAAGA0SNwF-L9Ir9xkCsHqXF0PkA3LojiAg9XnqXP51BRGTb65dNouopwGtVT7Eu5rEIc-3UveM_-vOygk -project start-kleen-test -releaseMessage "TestRelease"
#>

param(
    [string]$fireBaseToken,
    [string]$fireBaseProject,
    [string]$releaseMessage
)

$ErrorView = "NormalView"

$dir = Split-Path $MyInvocation.MyCommand.Path -Parent
Push-Location $dir

npm i -g firebase-tools
write-host "starting deploy...";
firebase --version;
firebase deploy --token $fireBaseToken --project $fireBaseProject --message "Release: $releaseMessage";
#firebase deploy --token "1//0dZb0O_XivzwxCgYIARAAGA0SNwF-L9Ir9xkCsHqXF0PkA3LojiAg9XnqXP51BRGTb65dNouopwGtVT7Eu5rEIc-3UveM_-vOygk" --project start-kleen-test --message "Release";
write-host "deployment completed";

Pop-Location
