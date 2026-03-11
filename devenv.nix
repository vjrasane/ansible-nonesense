{ pkgs, ... }:

{
  languages.typescript.enable = true;

  packages = with pkgs; [
    nodejs_25
    ansible
    python3

    just
  ];
}
