if [ -n "$PS1" ] && [ -e $HOME/.bashrc ]; then
    source $HOME/.bashrc;
fi

shopt -u expand_aliases
PATH=${PATH:-}
nix_saved_PATH="$PATH"
XDG_DATA_DIRS=${XDG_DATA_DIRS:-}
nix_saved_XDG_DATA_DIRS="$XDG_DATA_DIRS"
mesonFlags=''
export mesonFlags
declare -a envBuildTargetHooks=('addPythonPath' 'sysconfigdataHook' )
LD='ld'
export LD
depsHostHost=''
export depsHostHost
NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu='1'
export NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu
HOSTTYPE='x86_64'
NIX_HARDENING_ENABLE='bindnow format fortify fortify3 libcxxhardeningextensive libcxxhardeningfast pic relro stackclashprotection stackprotector strictoverflow zerocallusedregs'
export NIX_HARDENING_ENABLE
_PYTHON_SYSCONFIGDATA_NAME='_sysconfigdata__linux_x86_64-linux-gnu'
export _PYTHON_SYSCONFIGDATA_NAME
outputLib='out'
depsTargetTarget=''
export depsTargetTarget
SOURCE_DATE_EPOCH='315532800'
export SOURCE_DATE_EPOCH
dontAddDisableDepTrack='1'
export dontAddDisableDepTrack
AR='ar'
export AR
DEVENV_PROFILE='/nix/store/khynjhfr4kn6fn8srs3wvrxbx5qzh5a0-devenv-profile'
export DEVENV_PROFILE
NIX_STORE='/nix/store'
export NIX_STORE
declare -a envBuildHostHooks=('addPythonPath' 'sysconfigdataHook' )
DEVENV_STATE='/home/ville/repositories/nonesible/.devenv/state'
export DEVENV_STATE
PKG_CONFIG_PATH='/nix/store/pg04l21ca5xaif9hplyi09lhqxbipkcx-bash-interactive-5.3p9-dev/lib/pkgconfig:/nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12/lib/pkgconfig:/nix/store/5i226lbgs0d6i20bz9qzmpmvhbj6ahx2-libssh-0.11.3-dev/lib/pkgconfig'
export PKG_CONFIG_PATH
depsTargetTargetPropagated=''
export depsTargetTargetPropagated
outputBin='out'
declare -a preConfigureHooks=('_multioutConfig' )
outputDevman='out'
prefix='/nix/store/w4sbg0hbspssvrl29wgxmnkl2hip2gga-devenv-shell-env'
NIX_BINTOOLS='/nix/store/4yi6jj75bb5hhdzpzlxfyf69d35wsf2x-binutils-wrapper-2.44'
export NIX_BINTOOLS
buildInputs=''
export buildInputs
LINENO='79'
outputMan='out'
NIX_CFLAGS_COMPILE=' -frandom-seed=w4sbg0hbsp -isystem /nix/store/pg04l21ca5xaif9hplyi09lhqxbipkcx-bash-interactive-5.3p9-dev/include -isystem /nix/store/rmrlkn4hcsfllvki855yig5vpmlk4kw1-nodejs-25.7.0/include -isystem /nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12/include -isystem /nix/store/5i226lbgs0d6i20bz9qzmpmvhbj6ahx2-libssh-0.11.3-dev/include -isystem /nix/store/pg04l21ca5xaif9hplyi09lhqxbipkcx-bash-interactive-5.3p9-dev/include -isystem /nix/store/rmrlkn4hcsfllvki855yig5vpmlk4kw1-nodejs-25.7.0/include -isystem /nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12/include -isystem /nix/store/5i226lbgs0d6i20bz9qzmpmvhbj6ahx2-libssh-0.11.3-dev/include'
export NIX_CFLAGS_COMPILE
doCheck=''
export doCheck
IFS=' 	
'
MACHTYPE='x86_64-pc-linux-gnu'
NIX_NO_SELF_RPATH='1'
PYTHONNOUSERSITE='1'
export PYTHONNOUSERSITE
declare -a envHostTargetHooks=('pkgConfigWrapper_addPkgConfigPath' 'ccWrapper_addCVars' 'bintoolsWrapper_addLDVars' )
NIX_ENFORCE_NO_NATIVE='1'
export NIX_ENFORCE_NO_NATIVE
initialPath='/nix/store/hlxw2q9qansq7bn52xvlb5badw3z1v8s-coreutils-9.10 /nix/store/b3rx5wac9hhfxn9120xkcvdwj51mc9z2-findutils-4.10.0 /nix/store/icrrz26xbyp293kagrlkab1bhc6gra0r-diffutils-3.12 /nix/store/wv7qq5yb8plyhxji9x3r5gpkyfm2kf29-gnused-4.9 /nix/store/8laf6k81j9ckylrigj3xsk76j69knhvl-gnugrep-3.12 /nix/store/gf7b4yz4vhd0y2hnnrimhh875ghwzzzj-gawk-5.3.2 /nix/store/isva9q9zx3frx6hh6cnpihh1kd2bx6bk-gnutar-1.35 /nix/store/w1n7yp2vnldr395hbwbcaw9sflh413bm-gzip-1.14 /nix/store/x8l7qzpab2gpdrp89g48mxlrsiz4f0gm-bzip2-1.0.8-bin /nix/store/0xw6y53ijaqwfd9c99wyaqiinychzv1f-gnumake-4.4.1 /nix/store/2hjsch59amjs3nbgh7ahcfzm2bfwl8zi-bash-5.3p9 /nix/store/8y5jm97n4lyw80gh71yihghbhqc11fdz-patch-2.8 /nix/store/27fx8p4k6098wan3zahdbyj79ndcn03z-xz-5.8.2-bin /nix/store/p3j7lphwlci13f9w2v4rav6rbvpi80li-file-5.45'
declare -a preFixupHooks=('_moveToShare' '_multioutDocs' '_multioutDevs' )
depsBuildTargetPropagated=''
export depsBuildTargetPropagated
defaultNativeBuildInputs='/nix/store/590yx3aynyhs48jyk8ip37fk1mjqfhkb-patchelf-0.15.2 /nix/store/gz3rknshr1ywis4mjaqrgj3z2shp3n3v-update-autotools-gnu-config-scripts-hook /nix/store/0y5xmdb7qfvimjwbq7ibg1xdgkgjwqng-no-broken-symlinks.sh /nix/store/cv1d7p48379km6a85h4zp6kr86brh32q-audit-tmpdir.sh /nix/store/85clx3b0xkdf58jn161iy80y5223ilbi-compress-man-pages.sh /nix/store/p3l1a5y7nllfyrjn2krlwgcc3z0cd3fq-make-symlinks-relative.sh /nix/store/5yzw0vhkyszf2d179m0qfkgxmp5wjjx4-move-docs.sh /nix/store/fyaryjvghbkpfnsyw97hb3lyb37s1pd6-move-lib64.sh /nix/store/kd4xwxjpjxi71jkm6ka0np72if9rm3y0-move-sbin.sh /nix/store/pag6l61paj1dc9sv15l7bm5c17xn5kyk-move-systemd-user-units.sh /nix/store/cmzya9irvxzlkh7lfy6i82gbp0saxqj3-multiple-outputs.sh /nix/store/x8c40nfigps493a07sdr2pm5s9j1cdc0-patch-shebangs.sh /nix/store/cickvswrvann041nqxb0rxilc46svw1n-prune-libtool-files.sh /nix/store/xyff06pkhki3qy1ls77w10s0v79c9il0-reproducible-builds.sh /nix/store/z7k98578dfzi6l3hsvbivzm7hfqlk0zc-set-source-date-epoch-to-latest.sh /nix/store/pilsssjjdxvdphlg2h19p0bfx5q0jzkn-strip.sh /nix/store/kbw2j1vag664b3sj3rjwz9v53cqx87sb-gcc-wrapper-15.2.0'
doInstallCheck=''
export doInstallCheck
declare -a propagatedBuildDepFiles=('propagated-build-build-deps' 'propagated-native-build-inputs' 'propagated-build-target-deps' )
IN_NIX_SHELL='impure'
export IN_NIX_SHELL
PS4='+ '
depsBuildBuild=''
export depsBuildBuild
DEVENV_DOTFILE='/home/ville/repositories/nonesible/.devenv'
export DEVENV_DOTFILE
preConfigurePhases=' updateAutotoolsGnuConfigScriptsPhase'
preferLocalBuild='1'
export preferLocalBuild
strictDeps=''
export strictDeps
declare -a pkgsBuildBuild=()
defaultBuildInputs=''
NIX_PKG_CONFIG_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu='1'
export NIX_PKG_CONFIG_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu
__structuredAttrs=''
export __structuredAttrs
pkg='/nix/store/kbw2j1vag664b3sj3rjwz9v53cqx87sb-gcc-wrapper-15.2.0'
CXX='g++'
export CXX
SIZE='size'
export SIZE
DEVENV_ROOT='/home/ville/repositories/nonesible'
export DEVENV_ROOT
shellHook='
export PS1="\[\e[0;34m\](devenv)\[\e[0m\] ${PS1-}"

# override temp directories after "nix develop"
for var in TMP TMPDIR TEMP TEMPDIR; do
  if [ -n "${!var-}" ]; then
    export "$var"=/tmp
  fi
done
if [ -n "${NIX_BUILD_TOP-}" ]; then
  unset NIX_BUILD_TOP
fi

# set path to locales on non-NixOS Linux hosts
if [ -z "${LOCALE_ARCHIVE-}" ]; then
  export LOCALE_ARCHIVE=/nix/store/q6y3frkqaq8v7va2rmgaq6jvhy1vb9q3-glibc-locales-2.42-51/lib/locale/locale-archive
fi


# direnv helper
if [ ! type -p direnv &>/dev/null && -f .envrc ]; then
  echo "An .envrc file was detected, but the direnv command is not installed."
  echo "To use this configuration, please install direnv: https://direnv.net/docs/installation.html"
fi

mkdir -p "$DEVENV_STATE"
if [ ! -L "$DEVENV_DOTFILE/profile" ] || [ "$(/nix/store/hlxw2q9qansq7bn52xvlb5badw3z1v8s-coreutils-9.10/bin/readlink $DEVENV_DOTFILE/profile)" != "/nix/store/khynjhfr4kn6fn8srs3wvrxbx5qzh5a0-devenv-profile" ]
then
  ln -snf /nix/store/khynjhfr4kn6fn8srs3wvrxbx5qzh5a0-devenv-profile "$DEVENV_DOTFILE/profile"
fi
unset HOST_PATH NIX_BUILD_CORES __structuredAttrs buildInputs buildPhase builder depsBuildBuild depsBuildBuildPropagated depsBuildTarget depsBuildTargetPropagated depsHostHost depsHostHostPropagated depsTargetTarget depsTargetTargetPropagated dontAddDisableDepTrack doCheck doInstallCheck nativeBuildInputs out outputs patches phases preferLocalBuild propagatedBuildInputs propagatedNativeBuildInputs shell shellHook stdenv strictDeps

mkdir -p /run/user/1000/devenv-3740043
ln -snf /run/user/1000/devenv-3740043 /home/ville/repositories/nonesible/.devenv/run




# Check whether the direnv integration is out of date.
{
  if [[ ":${DIRENV_ACTIVE-}:" == *":/home/ville/repositories/nonesible:"* ]]; then
    if [[ ! "${DEVENV_NO_DIRENVRC_OUTDATED_WARNING-}" == 1 && ! "${DEVENV_DIRENVRC_ROLLING_UPGRADE-}" == 1 ]]; then
      if [[ ${DEVENV_DIRENVRC_VERSION:-0} -lt 2 ]]; then
        direnv_line=$(grep --color=never -E "source_url.*cachix/devenv" .envrc || echo "")

        echo "✨ The direnv integration in your .envrc is out of date."
        echo ""
        echo -n "RECOMMENDED: devenv can now auto-upgrade the direnv integration. "
        if [[ -n "$direnv_line" ]]; then
          echo "To enable this feature, replace the following line in your .envrc:"
          echo ""
          echo "  $direnv_line"
          echo ""
          echo "with:"
          echo ""
          echo "  eval \"\$(devenv direnvrc)\""
        else
          echo "To enable this feature, replace the \`source_url\` line that fetches the direnvrc integration in your .envrc with:"
          echo ""
          echo "  eval \"$(devenv direnvrc)\""
        fi
        echo ""
          echo "If you prefer to continue managing the integration manually, follow the upgrade instructions at https://devenv.sh/integrations/direnv/."
          echo ""
          echo "To disable this message:"
          echo ""
          echo "  Add the following environment to your .envrc before \`use devenv\`:"
          echo ""
          echo "    export DEVENV_NO_DIRENVRC_OUTDATED_WARNING=1"
          echo ""
          echo "  Or set the following option in your devenv configuration:"
          echo ""
          echo "    devenv.warnOnNewVersion = false;"
          echo ""
      fi
    fi
  fi
} >&2

'
export shellHook
SHELL='/nix/store/2hjsch59amjs3nbgh7ahcfzm2bfwl8zi-bash-5.3p9/bin/bash'
export SHELL
outputs='out'
export outputs
phases='buildPhase'
export phases
configureFlags=''
export configureFlags
out='/nix/store/w4sbg0hbspssvrl29wgxmnkl2hip2gga-devenv-shell-env'
export out
declare -a pkgsTargetTarget=()
declare -a envTargetTargetHooks=()
checkPhase='justCheckPhase'
declare -a pkgsHostHost=()
stdenv='/nix/store/zkiy4zv8wz3v95bj6fdmkqwql8x1vnhb-stdenv-linux'
export stdenv
shell='/nix/store/2hjsch59amjs3nbgh7ahcfzm2bfwl8zi-bash-5.3p9/bin/bash'
export shell
hardeningDisable=''
export hardeningDisable
outputDoc='out'
name='devenv-shell-env'
export name
RANLIB='ranlib'
export RANLIB
propagatedNativeBuildInputs=''
export propagatedNativeBuildInputs
PKG_CONFIG='pkg-config'
export PKG_CONFIG
outputInclude='out'
builder='/nix/store/2hjsch59amjs3nbgh7ahcfzm2bfwl8zi-bash-5.3p9/bin/bash'
export builder
outputInfo='out'
propagatedBuildInputs=''
export propagatedBuildInputs
DETERMINISTIC_BUILD='1'
export DETERMINISTIC_BUILD
STRIP='strip'
export STRIP
PYTHONPATH='/nix/store/dlwmqm36lpzwlvp67lvjmdxs5yjmr80h-python3.13-ansible-core-2.20.0/lib/python3.13/site-packages:/nix/store/in895y7kyprggfvgc5c195w90d6haw79-python3.13-ansible-13.3.0/lib/python3.13/site-packages:/nix/store/naiqd97qwqldn2v3i8v3jrs21qxx8i0f-python3.13-passlib-1.9.3/lib/python3.13/site-packages:/nix/store/qj4sqhwh1d2z5k8yhwip86ycnzgfkjs3-python3.13-libpass-1.9.3/lib/python3.13/site-packages:/nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12/lib/python3.13/site-packages:/nix/store/admk7pgwpaa17hak408ard5bsbrvhsfa-python3.13-jxmlease-1.0.3/lib/python3.13/site-packages:/nix/store/f814lmrkp62bd2a2szdknbig941syg1j-python3.13-lxml-6.0.2/lib/python3.13/site-packages:/nix/store/ffgxixkypmslyb5s63iz51jcj8nrskh5-python3.13-ncclient-0.7.0/lib/python3.13/site-packages:/nix/store/9d4a2i6h1n6km9yxdjm7g7x3dx2p02yb-python3.13-paramiko-4.0.0/lib/python3.13/site-packages:/nix/store/y6m6x9ax6aj119q1lq88b5ddnwq2iq75-python3.13-bcrypt-5.0.0/lib/python3.13/site-packages:/nix/store/4jh36f5z8yhk8vz2zv54b761bynj77mx-python3.13-cryptography-46.0.4/lib/python3.13/site-packages:/nix/store/w7hyxgvvq38bdx5jv9rq9gpk1zynzd8b-python3.13-cffi-2.0.0/lib/python3.13/site-packages:/nix/store/kd0yrsmrslihfp66y2k88cyan1vjydl8-python3.13-pycparser-3.00/lib/python3.13/site-packages:/nix/store/2knqig9rff4b68h2lih1pmlb2mkkjsg9-python3.13-pynacl-1.6.2/lib/python3.13/site-packages:/nix/store/7yzk3vvnvyaa3mr1q6i6v1h64nx472fa-python3.13-netaddr-1.3.0/lib/python3.13/site-packages:/nix/store/rn436mxx9wg976hjmlqa0yqf819xs5g8-python3.13-ansible-pylibssh-1.3.0/lib/python3.13/site-packages:/nix/store/60vp4xbca6p7h8a7l7f4g0p15az1ymsy-python3.13-xmltodict-1.0.2/lib/python3.13/site-packages:/nix/store/n335wjgylwlsrg8gxcmvc4341h2bl9a4-python3.13-jsonschema-4.26.0/lib/python3.13/site-packages:/nix/store/0m5pvsz5jqljirlh3wgbffyhz9wv20i3-python3.13-attrs-25.4.0/lib/python3.13/site-packages:/nix/store/kqs6pxz5ryf6w8k3kw39lf7mjkyqjbjw-python3.13-jsonpath-ng-1.7.0/lib/python3.13/site-packages:/nix/store/hr8chxljpjsl03d41yk2k4v3xz6zvp0h-python3.13-ply-3.11/lib/python3.13/site-packages:/nix/store/nmj0cf2v8cg6iqm8sj6mx9rfn1f9kl3k-python3.13-jsonschema-specifications-2025.9.1/lib/python3.13/site-packages:/nix/store/2fnmkhar042svfdwzy5jv42xf0b5xbrv-python3.13-referencing-0.37.0/lib/python3.13/site-packages:/nix/store/7mlv1v3z0liqmaq715cad6ddkrvlqv3d-python3.13-rpds-py-0.30.0/lib/python3.13/site-packages:/nix/store/p1lnyxjiv2zyf95i91hvnhgazl0jj4dd-python3.13-typing-extensions-4.15.0/lib/python3.13/site-packages:/nix/store/yndxm185x2xhq5psf21i84mk9dqyd52x-python3.13-textfsm-2.1.0/lib/python3.13/site-packages:/nix/store/j1hz8xq2mvvdkh5hqz4dyifh6bw6anwc-python3.13-ttp-0.10.0/lib/python3.13/site-packages:/nix/store/2j9kp55nnfgfgfsyrpl3nz80i7f1ibg9-python3.13-cerberus-1.3.8/lib/python3.13/site-packages:/nix/store/34a74167mk7ac9xa163hz14v495rykdp-python3.13-configparser-7.2.0/lib/python3.13/site-packages:/nix/store/ih7imqvwvjlw9whazqij194d9bdciwdd-python3.13-deepdiff-8.6.1/lib/python3.13/site-packages:/nix/store/0g2b85kr75pj4wzqgmwlqsffg0lvjgq4-python3.13-orderly-set-5.5.0/lib/python3.13/site-packages:/nix/store/6vzfnmwky71nyrbxr0fgxj6s622bm3ab-python3.13-geoip2-5.2.0/lib/python3.13/site-packages:/nix/store/lza0gcr0aahlay3livkg38smwcv10d0y-python3.13-aiohttp-3.13.3/lib/python3.13/site-packages:/nix/store/2w54w5r2cyr4wa8cl2mhdj0ra57wqkiy-python3.13-aiohappyeyeballs-2.6.1/lib/python3.13/site-packages:/nix/store/dcyfk1z9ixd6g8vkh2q9ky6vgv7qg8ax-python3.13-aiosignal-1.4.0/lib/python3.13/site-packages:/nix/store/gv46pbpgs2rh82nq2i8f1fhv8fdska43-python3.13-frozenlist-1.8.0/lib/python3.13/site-packages:/nix/store/w240yhl5211gckbw444ahl6il3iyjnzn-python3.13-multidict-6.7.1/lib/python3.13/site-packages:/nix/store/x1m94s80lqq2j99d31s02bczls7wnmjd-python3.13-propcache-0.4.1/lib/python3.13/site-packages:/nix/store/zp0ma8nzpqpqn4lzmcfsyspca4lvl4g3-python3.13-yarl-1.23.0/lib/python3.13/site-packages:/nix/store/0bss3ang0ihz3l8v3zhclsdml5whq6pw-python3.13-idna-3.11/lib/python3.13/site-packages:/nix/store/g89jkpdpyxdm04wrjfv4pvl1bg9smkay-python3.13-aiodns-4.0.0/lib/python3.13/site-packages:/nix/store/66rr3c9ck5hr3ph8wwzgs3lbr317z5cg-python3.13-pycares-5.0.1/lib/python3.13/site-packages:/nix/store/9qlis7gncy052snkfw0hzp4lks2xrgp2-python3.13-brotli-1.2.0/lib/python3.13/site-packages:/nix/store/zkakf2jmis297pm868x2ra3nyw66qly5-python3.13-backports-zstd-1.3.0/lib/python3.13/site-packages:/nix/store/hnanxnhjsps4z0q023yrz7l1gblj8r06-python3.13-maxminddb-3.0.0/lib/python3.13/site-packages:/nix/store/g5lnw7k6ygfjwlcsfh5lqd9p4424y44z-python3.13-requests-2.32.5/lib/python3.13/site-packages:/nix/store/dhfsv76wvhsllb1k9jy7b145am9vvi24-python3.13-certifi-2026.01.04/lib/python3.13/site-packages:/nix/store/xwikpzksjqk37pgv7a1157zc1662nzxc-python3.13-charset-normalizer-3.4.4/lib/python3.13/site-packages:/nix/store/cq110j6276md3hih9khn1x89l59yv345-python3.13-urllib3-2.6.3/lib/python3.13/site-packages:/nix/store/jd1wz945vbbs6shmqjjdfki4jfqmi5rg-python3.13-jinja2-3.1.6/lib/python3.13/site-packages:/nix/store/3vslwmp460apk3x7bgh2y9wmkprfhaga-python3.13-markupsafe-3.0.3/lib/python3.13/site-packages:/nix/store/bldf15zjwl4kjpir25z750gmq1xd2bqi-python3.13-netmiko-4.6.0/lib/python3.13/site-packages:/nix/store/biri5y6jj8py9vkls97gcfp3c5rwxzp1-python3.13-ntc-templates-8.1.0/lib/python3.13/site-packages:/nix/store/a5954gkxzchw6fir3dvwsrd6gavvi316-python3.13-pyserial-3.5/lib/python3.13/site-packages:/nix/store/imindlm08wk8n5d0yhmm0ap3gcymqxdk-python3.13-pyyaml-6.0.3/lib/python3.13/site-packages:/nix/store/kjg4cnr5qwmswr0yapsik3msi5db8dvz-python3.13-rich-14.2.0/lib/python3.13/site-packages:/nix/store/kddx44aylr3s2vpqzp4n6l48vqajamfy-python3.13-markdown-it-py-4.0.0/lib/python3.13/site-packages:/nix/store/lb0haqiga30nwr74m6spfjkcj9x7k9r2-python3.13-mdurl-0.1.2/lib/python3.13/site-packages:/nix/store/xi7zkfs5dm3s7spplqzyxcg0ih7375dc-python3.13-pygments-2.19.2/lib/python3.13/site-packages:/nix/store/aw6yr5gcas5hgzg0nm2gmykfihdkj3vv-python3.13-ruamel-yaml-0.19.1/lib/python3.13/site-packages:/nix/store/nyk8alg64330gly1kb8ajg4lph9z5qyx-python3.13-ruamel-base-1.0.0/lib/python3.13/site-packages:/nix/store/w8q6pzxhy7xyy2kgk7m42ki169f5zcv8-python3.13-ruamel-yaml-clib-0.2.15/lib/python3.13/site-packages:/nix/store/h8gf4dnzh5ca39slmkp680qncf0pwy7r-python3.13-scp-0.15.0/lib/python3.13/site-packages:/nix/store/lqxbwj7qbx42zxmidk0cjp9qj4fqgcys-python3.13-openpyxl-3.1.5/lib/python3.13/site-packages:/nix/store/5kl7wlpkd631ij8zqf42h790ll1xncjf-python3.13-et-xmlfile-2.0.0/lib/python3.13/site-packages:/nix/store/lm4kix5qvzvk3463gx9xywi2f6rs25ww-python3.13-tabulate-0.9.0/lib/python3.13/site-packages:/nix/store/bs8z84ix47752hwp6hgfqkl7hgr7hby0-python3.13-yangson-1.6.6/lib/python3.13/site-packages:/nix/store/945fpzd2jkv9lrhyj5vjihabad7kmzwk-python3.13-elementpath-5.1.1/lib/python3.13/site-packages:/nix/store/2f61g72xwxjz30yb14d5ja8zy894g86q-python3.13-jmespath-1.0.1/lib/python3.13/site-packages:/nix/store/cc9qkj968x46wz4ycp5i2gg988b8c4g0-python3.13-packaging-25.0/lib/python3.13/site-packages:/nix/store/xrpx6n6x5akc2jir87ikvxqblqgxn944-python3.13-resolvelib-1.2.1/lib/python3.13/site-packages:/nix/store/prp4z2mqzrbxv5kshvkhx60z9ni7amc7-python3.13-junit-xml-1.9/lib/python3.13/site-packages:/nix/store/8dzm41v2r1lr5i671l8dhvhag4j5h3i0-python3.13-six-1.17.0/lib/python3.13/site-packages:/nix/store/kh6wmnbrm1azlvcy11abhhsgpvif7lq7-python3.13-pexpect-4.9.0/lib/python3.13/site-packages:/nix/store/jy3jmb0376v5dxk78fljlkfrqzgcapjw-python3.13-ptyprocess-0.7.0/lib/python3.13/site-packages:/nix/store/cmhwsajfy5ygcxvd6x5kvsixdjm61zc8-python3.13-psutil-7.2.1/lib/python3.13/site-packages:/nix/store/rwvlim2k4q7khcb91syzpgzcbv4am9hr-python3.13-pycrypto-3.23.0/lib/python3.13/site-packages:/nix/store/920am5ba4zm14dv80i7ychmznxlfmw4l-python3.13-pycryptodome-3.23.0/lib/python3.13/site-packages'
export PYTHONPATH
XDG_DATA_DIRS='/nix/store/0550j0i8bmzxbcnzrg1g51zigj7y12ih-bash-interactive-5.3p9/share:/nix/store/rmrlkn4hcsfllvki855yig5vpmlk4kw1-nodejs-25.7.0/share:/nix/store/dlwmqm36lpzwlvp67lvjmdxs5yjmr80h-python3.13-ansible-core-2.20.0/share:/nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12/share:/nix/store/x6bvf2yyik9jlp2bdsdh8hbzg4l9sd49-just-1.46.0/share:/nix/store/1nv3i8mpypy3d516f4pd95m0w72r73jy-pkg-config-wrapper-0.29.2/share:/nix/store/590yx3aynyhs48jyk8ip37fk1mjqfhkb-patchelf-0.15.2/share'
export XDG_DATA_DIRS
declare -a fixupOutputHooks=('if [ -z "${dontPatchELF-}" ]; then patchELF "$prefix"; fi' 'if [[ -z "${noAuditTmpdir-}" && -e "$prefix" ]]; then auditTmpdir "$prefix"; fi' 'if [ -z "${dontGzipMan-}" ]; then compressManPages "$prefix"; fi' '_moveLib64' '_moveSbin' '_moveSystemdUserUnits' 'patchShebangsAuto' '_pruneLibtoolFiles' '_doStrip' )
AS='as'
export AS
CONFIG_SHELL='/nix/store/2hjsch59amjs3nbgh7ahcfzm2bfwl8zi-bash-5.3p9/bin/bash'
export CONFIG_SHELL
NIX_CC='/nix/store/kbw2j1vag664b3sj3rjwz9v53cqx87sb-gcc-wrapper-15.2.0'
export NIX_CC
PATH='/nix/store/0550j0i8bmzxbcnzrg1g51zigj7y12ih-bash-interactive-5.3p9/bin:/nix/store/716f9vxn5aan1g1pfv1pmn5jiks4gnhi-typescript-5.9.3/bin:/nix/store/hb28nfxmlsdvbf82d5lcsb442nzbkb3l-typescript-language-server-5.1.3/bin:/nix/store/rmrlkn4hcsfllvki855yig5vpmlk4kw1-nodejs-25.7.0/bin:/nix/store/dlwmqm36lpzwlvp67lvjmdxs5yjmr80h-python3.13-ansible-core-2.20.0/bin:/nix/store/in895y7kyprggfvgc5c195w90d6haw79-python3.13-ansible-13.3.0/bin:/nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12/bin:/nix/store/7yzk3vvnvyaa3mr1q6i6v1h64nx472fa-python3.13-netaddr-1.3.0/bin:/nix/store/n335wjgylwlsrg8gxcmvc4341h2bl9a4-python3.13-jsonschema-4.26.0/bin:/nix/store/kqs6pxz5ryf6w8k3kw39lf7mjkyqjbjw-python3.13-jsonpath-ng-1.7.0/bin:/nix/store/yndxm185x2xhq5psf21i84mk9dqyd52x-python3.13-textfsm-2.1.0/bin:/nix/store/j1hz8xq2mvvdkh5hqz4dyifh6bw6anwc-python3.13-ttp-0.10.0/bin:/nix/store/ih7imqvwvjlw9whazqij194d9bdciwdd-python3.13-deepdiff-8.6.1/bin:/nix/store/xwikpzksjqk37pgv7a1157zc1662nzxc-python3.13-charset-normalizer-3.4.4/bin:/nix/store/bldf15zjwl4kjpir25z750gmq1xd2bqi-python3.13-netmiko-4.6.0/bin:/nix/store/a5954gkxzchw6fir3dvwsrd6gavvi316-python3.13-pyserial-3.5/bin:/nix/store/kddx44aylr3s2vpqzp4n6l48vqajamfy-python3.13-markdown-it-py-4.0.0/bin:/nix/store/xi7zkfs5dm3s7spplqzyxcg0ih7375dc-python3.13-pygments-2.19.2/bin:/nix/store/lm4kix5qvzvk3463gx9xywi2f6rs25ww-python3.13-tabulate-0.9.0/bin:/nix/store/bs8z84ix47752hwp6hgfqkl7hgr7hby0-python3.13-yangson-1.6.6/bin:/nix/store/2f61g72xwxjz30yb14d5ja8zy894g86q-python3.13-jmespath-1.0.1/bin:/nix/store/x6bvf2yyik9jlp2bdsdh8hbzg4l9sd49-just-1.46.0/bin:/nix/store/1nv3i8mpypy3d516f4pd95m0w72r73jy-pkg-config-wrapper-0.29.2/bin:/nix/store/590yx3aynyhs48jyk8ip37fk1mjqfhkb-patchelf-0.15.2/bin:/nix/store/kbw2j1vag664b3sj3rjwz9v53cqx87sb-gcc-wrapper-15.2.0/bin:/nix/store/sca0pf46jmxva40qahkcwys5c1lvk6n2-gcc-15.2.0/bin:/nix/store/2c48s343k15i0cmwb9cp1vi6randmzcw-glibc-2.42-51-bin/bin:/nix/store/hlxw2q9qansq7bn52xvlb5badw3z1v8s-coreutils-9.10/bin:/nix/store/4yi6jj75bb5hhdzpzlxfyf69d35wsf2x-binutils-wrapper-2.44/bin:/nix/store/9nmzd62x45ayp4vmswvn6z45h6bzrsla-binutils-2.44/bin:/nix/store/hlxw2q9qansq7bn52xvlb5badw3z1v8s-coreutils-9.10/bin:/nix/store/b3rx5wac9hhfxn9120xkcvdwj51mc9z2-findutils-4.10.0/bin:/nix/store/icrrz26xbyp293kagrlkab1bhc6gra0r-diffutils-3.12/bin:/nix/store/wv7qq5yb8plyhxji9x3r5gpkyfm2kf29-gnused-4.9/bin:/nix/store/8laf6k81j9ckylrigj3xsk76j69knhvl-gnugrep-3.12/bin:/nix/store/gf7b4yz4vhd0y2hnnrimhh875ghwzzzj-gawk-5.3.2/bin:/nix/store/isva9q9zx3frx6hh6cnpihh1kd2bx6bk-gnutar-1.35/bin:/nix/store/w1n7yp2vnldr395hbwbcaw9sflh413bm-gzip-1.14/bin:/nix/store/x8l7qzpab2gpdrp89g48mxlrsiz4f0gm-bzip2-1.0.8-bin/bin:/nix/store/0xw6y53ijaqwfd9c99wyaqiinychzv1f-gnumake-4.4.1/bin:/nix/store/2hjsch59amjs3nbgh7ahcfzm2bfwl8zi-bash-5.3p9/bin:/nix/store/8y5jm97n4lyw80gh71yihghbhqc11fdz-patch-2.8/bin:/nix/store/27fx8p4k6098wan3zahdbyj79ndcn03z-xz-5.8.2-bin/bin:/nix/store/p3j7lphwlci13f9w2v4rav6rbvpi80li-file-5.45/bin'
export PATH
OLDPWD=''
export OLDPWD
declare -a envBuildBuildHooks=('addPythonPath' 'sysconfigdataHook' )
buildPhase='{ echo "------------------------------------------------------------";
  echo " WARNING: the existence of this path is not guaranteed.";
  echo " It is an internal implementation detail for pkgs.mkShell.";
  echo "------------------------------------------------------------";
  echo;
  # Record all build inputs as runtime dependencies
  export;
} >> "$out"
'
export buildPhase
declare -a pkgsBuildTarget=()
_substituteStream_has_warned_replace_deprecation='false'
OBJCOPY='objcopy'
export OBJCOPY
declare -a envHostHostHooks=('pkgConfigWrapper_addPkgConfigPath' 'ccWrapper_addCVars' 'bintoolsWrapper_addLDVars' )
BASH='/nix/store/2hjsch59amjs3nbgh7ahcfzm2bfwl8zi-bash-5.3p9/bin/bash'
OBJDUMP='objdump'
export OBJDUMP
HOST_PATH='/nix/store/hlxw2q9qansq7bn52xvlb5badw3z1v8s-coreutils-9.10/bin:/nix/store/b3rx5wac9hhfxn9120xkcvdwj51mc9z2-findutils-4.10.0/bin:/nix/store/icrrz26xbyp293kagrlkab1bhc6gra0r-diffutils-3.12/bin:/nix/store/wv7qq5yb8plyhxji9x3r5gpkyfm2kf29-gnused-4.9/bin:/nix/store/8laf6k81j9ckylrigj3xsk76j69knhvl-gnugrep-3.12/bin:/nix/store/gf7b4yz4vhd0y2hnnrimhh875ghwzzzj-gawk-5.3.2/bin:/nix/store/isva9q9zx3frx6hh6cnpihh1kd2bx6bk-gnutar-1.35/bin:/nix/store/w1n7yp2vnldr395hbwbcaw9sflh413bm-gzip-1.14/bin:/nix/store/x8l7qzpab2gpdrp89g48mxlrsiz4f0gm-bzip2-1.0.8-bin/bin:/nix/store/0xw6y53ijaqwfd9c99wyaqiinychzv1f-gnumake-4.4.1/bin:/nix/store/2hjsch59amjs3nbgh7ahcfzm2bfwl8zi-bash-5.3p9/bin:/nix/store/8y5jm97n4lyw80gh71yihghbhqc11fdz-patch-2.8/bin:/nix/store/27fx8p4k6098wan3zahdbyj79ndcn03z-xz-5.8.2-bin/bin:/nix/store/p3j7lphwlci13f9w2v4rav6rbvpi80li-file-5.45/bin'
export HOST_PATH
READELF='readelf'
export READELF
NIX_BUILD_CORES='4'
export NIX_BUILD_CORES
outputDevdoc='REMOVE'
declare -a postFixupHooks=('noBrokenSymlinksInAllOutputs' '_makeSymlinksRelative' '_multioutPropagateDev' )
DEVENV_TASKS=''
export DEVENV_TASKS
cmakeFlags=''
export cmakeFlags
CC='gcc'
export CC
declare -a unpackCmdHooks=('_defaultUnpack' )
NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu='1'
export NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu
DEVENV_TASK_FILE='/nix/store/1107z2mpap2a57jj6yq751d5zhwwsw7i-tasks.json'
export DEVENV_TASK_FILE
outputDev='out'
OPTERR='1'
NM='nm'
export NM
OSTYPE='linux-gnu'
DEVENV_RUNTIME='/run/user/1000/devenv-3740043'
export DEVENV_RUNTIME
_PYTHON_HOST_PLATFORM='linux-x86_64'
export _PYTHON_HOST_PLATFORM
NIX_LDFLAGS='-rpath /nix/store/w4sbg0hbspssvrl29wgxmnkl2hip2gga-devenv-shell-env/lib  -L/nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12/lib -L/nix/store/zgmka7zcmx7442rashrdqdksl7sya9fv-libssh-0.11.3/lib -L/nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12/lib -L/nix/store/zgmka7zcmx7442rashrdqdksl7sya9fv-libssh-0.11.3/lib'
export NIX_LDFLAGS
declare -a pkgsHostTarget=()
system='x86_64-linux'
export system
patches=''
export patches
declare -a propagatedTargetDepFiles=('propagated-target-target-deps' )
depsBuildBuildPropagated=''
export depsBuildBuildPropagated
PYTHONHASHSEED='0'
export PYTHONHASHSEED
STRINGS='strings'
export STRINGS
installPhase='justInstallPhase'
declare -a postUnpackHooks=('_updateSourceDateEpochFromSourceRoot' )
depsBuildTarget=''
export depsBuildTarget
nativeBuildInputs='/nix/store/pg04l21ca5xaif9hplyi09lhqxbipkcx-bash-interactive-5.3p9-dev /nix/store/716f9vxn5aan1g1pfv1pmn5jiks4gnhi-typescript-5.9.3 /nix/store/hb28nfxmlsdvbf82d5lcsb442nzbkb3l-typescript-language-server-5.1.3 /nix/store/rmrlkn4hcsfllvki855yig5vpmlk4kw1-nodejs-25.7.0 /nix/store/dlwmqm36lpzwlvp67lvjmdxs5yjmr80h-python3.13-ansible-core-2.20.0 /nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12 /nix/store/x6bvf2yyik9jlp2bdsdh8hbzg4l9sd49-just-1.46.0 /nix/store/1nv3i8mpypy3d516f4pd95m0w72r73jy-pkg-config-wrapper-0.29.2'
export nativeBuildInputs
declare -a pkgsBuildHost=('/nix/store/pg04l21ca5xaif9hplyi09lhqxbipkcx-bash-interactive-5.3p9-dev' '/nix/store/0550j0i8bmzxbcnzrg1g51zigj7y12ih-bash-interactive-5.3p9' '/nix/store/716f9vxn5aan1g1pfv1pmn5jiks4gnhi-typescript-5.9.3' '/nix/store/hb28nfxmlsdvbf82d5lcsb442nzbkb3l-typescript-language-server-5.1.3' '/nix/store/rmrlkn4hcsfllvki855yig5vpmlk4kw1-nodejs-25.7.0' '/nix/store/dlwmqm36lpzwlvp67lvjmdxs5yjmr80h-python3.13-ansible-core-2.20.0' '/nix/store/in895y7kyprggfvgc5c195w90d6haw79-python3.13-ansible-13.3.0' '/nix/store/naiqd97qwqldn2v3i8v3jrs21qxx8i0f-python3.13-passlib-1.9.3' '/nix/store/qj4sqhwh1d2z5k8yhwip86ycnzgfkjs3-python3.13-libpass-1.9.3' '/nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12' '/nix/store/admk7pgwpaa17hak408ard5bsbrvhsfa-python3.13-jxmlease-1.0.3' '/nix/store/f814lmrkp62bd2a2szdknbig941syg1j-python3.13-lxml-6.0.2' '/nix/store/ffgxixkypmslyb5s63iz51jcj8nrskh5-python3.13-ncclient-0.7.0' '/nix/store/9d4a2i6h1n6km9yxdjm7g7x3dx2p02yb-python3.13-paramiko-4.0.0' '/nix/store/y6m6x9ax6aj119q1lq88b5ddnwq2iq75-python3.13-bcrypt-5.0.0' '/nix/store/4jh36f5z8yhk8vz2zv54b761bynj77mx-python3.13-cryptography-46.0.4' '/nix/store/w7hyxgvvq38bdx5jv9rq9gpk1zynzd8b-python3.13-cffi-2.0.0' '/nix/store/kd0yrsmrslihfp66y2k88cyan1vjydl8-python3.13-pycparser-3.00' '/nix/store/2knqig9rff4b68h2lih1pmlb2mkkjsg9-python3.13-pynacl-1.6.2' '/nix/store/7yzk3vvnvyaa3mr1q6i6v1h64nx472fa-python3.13-netaddr-1.3.0' '/nix/store/rn436mxx9wg976hjmlqa0yqf819xs5g8-python3.13-ansible-pylibssh-1.3.0' '/nix/store/5i226lbgs0d6i20bz9qzmpmvhbj6ahx2-libssh-0.11.3-dev' '/nix/store/zgmka7zcmx7442rashrdqdksl7sya9fv-libssh-0.11.3' '/nix/store/60vp4xbca6p7h8a7l7f4g0p15az1ymsy-python3.13-xmltodict-1.0.2' '/nix/store/n335wjgylwlsrg8gxcmvc4341h2bl9a4-python3.13-jsonschema-4.26.0' '/nix/store/0m5pvsz5jqljirlh3wgbffyhz9wv20i3-python3.13-attrs-25.4.0' '/nix/store/kqs6pxz5ryf6w8k3kw39lf7mjkyqjbjw-python3.13-jsonpath-ng-1.7.0' '/nix/store/hr8chxljpjsl03d41yk2k4v3xz6zvp0h-python3.13-ply-3.11' '/nix/store/nmj0cf2v8cg6iqm8sj6mx9rfn1f9kl3k-python3.13-jsonschema-specifications-2025.9.1' '/nix/store/2fnmkhar042svfdwzy5jv42xf0b5xbrv-python3.13-referencing-0.37.0' '/nix/store/7mlv1v3z0liqmaq715cad6ddkrvlqv3d-python3.13-rpds-py-0.30.0' '/nix/store/p1lnyxjiv2zyf95i91hvnhgazl0jj4dd-python3.13-typing-extensions-4.15.0' '/nix/store/yndxm185x2xhq5psf21i84mk9dqyd52x-python3.13-textfsm-2.1.0' '/nix/store/j1hz8xq2mvvdkh5hqz4dyifh6bw6anwc-python3.13-ttp-0.10.0' '/nix/store/2j9kp55nnfgfgfsyrpl3nz80i7f1ibg9-python3.13-cerberus-1.3.8' '/nix/store/34a74167mk7ac9xa163hz14v495rykdp-python3.13-configparser-7.2.0' '/nix/store/ih7imqvwvjlw9whazqij194d9bdciwdd-python3.13-deepdiff-8.6.1' '/nix/store/0g2b85kr75pj4wzqgmwlqsffg0lvjgq4-python3.13-orderly-set-5.5.0' '/nix/store/6vzfnmwky71nyrbxr0fgxj6s622bm3ab-python3.13-geoip2-5.2.0' '/nix/store/lza0gcr0aahlay3livkg38smwcv10d0y-python3.13-aiohttp-3.13.3' '/nix/store/2w54w5r2cyr4wa8cl2mhdj0ra57wqkiy-python3.13-aiohappyeyeballs-2.6.1' '/nix/store/dcyfk1z9ixd6g8vkh2q9ky6vgv7qg8ax-python3.13-aiosignal-1.4.0' '/nix/store/gv46pbpgs2rh82nq2i8f1fhv8fdska43-python3.13-frozenlist-1.8.0' '/nix/store/w240yhl5211gckbw444ahl6il3iyjnzn-python3.13-multidict-6.7.1' '/nix/store/x1m94s80lqq2j99d31s02bczls7wnmjd-python3.13-propcache-0.4.1' '/nix/store/zp0ma8nzpqpqn4lzmcfsyspca4lvl4g3-python3.13-yarl-1.23.0' '/nix/store/0bss3ang0ihz3l8v3zhclsdml5whq6pw-python3.13-idna-3.11' '/nix/store/g89jkpdpyxdm04wrjfv4pvl1bg9smkay-python3.13-aiodns-4.0.0' '/nix/store/66rr3c9ck5hr3ph8wwzgs3lbr317z5cg-python3.13-pycares-5.0.1' '/nix/store/9qlis7gncy052snkfw0hzp4lks2xrgp2-python3.13-brotli-1.2.0' '/nix/store/zkakf2jmis297pm868x2ra3nyw66qly5-python3.13-backports-zstd-1.3.0' '/nix/store/hnanxnhjsps4z0q023yrz7l1gblj8r06-python3.13-maxminddb-3.0.0' '/nix/store/g5lnw7k6ygfjwlcsfh5lqd9p4424y44z-python3.13-requests-2.32.5' '/nix/store/dhfsv76wvhsllb1k9jy7b145am9vvi24-python3.13-certifi-2026.01.04' '/nix/store/xwikpzksjqk37pgv7a1157zc1662nzxc-python3.13-charset-normalizer-3.4.4' '/nix/store/cq110j6276md3hih9khn1x89l59yv345-python3.13-urllib3-2.6.3' '/nix/store/jd1wz945vbbs6shmqjjdfki4jfqmi5rg-python3.13-jinja2-3.1.6' '/nix/store/3vslwmp460apk3x7bgh2y9wmkprfhaga-python3.13-markupsafe-3.0.3' '/nix/store/bldf15zjwl4kjpir25z750gmq1xd2bqi-python3.13-netmiko-4.6.0' '/nix/store/biri5y6jj8py9vkls97gcfp3c5rwxzp1-python3.13-ntc-templates-8.1.0' '/nix/store/a5954gkxzchw6fir3dvwsrd6gavvi316-python3.13-pyserial-3.5' '/nix/store/imindlm08wk8n5d0yhmm0ap3gcymqxdk-python3.13-pyyaml-6.0.3' '/nix/store/kjg4cnr5qwmswr0yapsik3msi5db8dvz-python3.13-rich-14.2.0' '/nix/store/kddx44aylr3s2vpqzp4n6l48vqajamfy-python3.13-markdown-it-py-4.0.0' '/nix/store/lb0haqiga30nwr74m6spfjkcj9x7k9r2-python3.13-mdurl-0.1.2' '/nix/store/xi7zkfs5dm3s7spplqzyxcg0ih7375dc-python3.13-pygments-2.19.2' '/nix/store/aw6yr5gcas5hgzg0nm2gmykfihdkj3vv-python3.13-ruamel-yaml-0.19.1' '/nix/store/nyk8alg64330gly1kb8ajg4lph9z5qyx-python3.13-ruamel-base-1.0.0' '/nix/store/w8q6pzxhy7xyy2kgk7m42ki169f5zcv8-python3.13-ruamel-yaml-clib-0.2.15' '/nix/store/h8gf4dnzh5ca39slmkp680qncf0pwy7r-python3.13-scp-0.15.0' '/nix/store/lqxbwj7qbx42zxmidk0cjp9qj4fqgcys-python3.13-openpyxl-3.1.5' '/nix/store/5kl7wlpkd631ij8zqf42h790ll1xncjf-python3.13-et-xmlfile-2.0.0' '/nix/store/lm4kix5qvzvk3463gx9xywi2f6rs25ww-python3.13-tabulate-0.9.0' '/nix/store/bs8z84ix47752hwp6hgfqkl7hgr7hby0-python3.13-yangson-1.6.6' '/nix/store/945fpzd2jkv9lrhyj5vjihabad7kmzwk-python3.13-elementpath-5.1.1' '/nix/store/2f61g72xwxjz30yb14d5ja8zy894g86q-python3.13-jmespath-1.0.1' '/nix/store/cc9qkj968x46wz4ycp5i2gg988b8c4g0-python3.13-packaging-25.0' '/nix/store/xrpx6n6x5akc2jir87ikvxqblqgxn944-python3.13-resolvelib-1.2.1' '/nix/store/prp4z2mqzrbxv5kshvkhx60z9ni7amc7-python3.13-junit-xml-1.9' '/nix/store/8dzm41v2r1lr5i671l8dhvhag4j5h3i0-python3.13-six-1.17.0' '/nix/store/kh6wmnbrm1azlvcy11abhhsgpvif7lq7-python3.13-pexpect-4.9.0' '/nix/store/jy3jmb0376v5dxk78fljlkfrqzgcapjw-python3.13-ptyprocess-0.7.0' '/nix/store/cmhwsajfy5ygcxvd6x5kvsixdjm61zc8-python3.13-psutil-7.2.1' '/nix/store/rwvlim2k4q7khcb91syzpgzcbv4am9hr-python3.13-pycrypto-3.23.0' '/nix/store/920am5ba4zm14dv80i7ychmznxlfmw4l-python3.13-pycryptodome-3.23.0' '/nix/store/x6bvf2yyik9jlp2bdsdh8hbzg4l9sd49-just-1.46.0' '/nix/store/1nv3i8mpypy3d516f4pd95m0w72r73jy-pkg-config-wrapper-0.29.2' '/nix/store/590yx3aynyhs48jyk8ip37fk1mjqfhkb-patchelf-0.15.2' '/nix/store/gz3rknshr1ywis4mjaqrgj3z2shp3n3v-update-autotools-gnu-config-scripts-hook' '/nix/store/0y5xmdb7qfvimjwbq7ibg1xdgkgjwqng-no-broken-symlinks.sh' '/nix/store/cv1d7p48379km6a85h4zp6kr86brh32q-audit-tmpdir.sh' '/nix/store/85clx3b0xkdf58jn161iy80y5223ilbi-compress-man-pages.sh' '/nix/store/p3l1a5y7nllfyrjn2krlwgcc3z0cd3fq-make-symlinks-relative.sh' '/nix/store/5yzw0vhkyszf2d179m0qfkgxmp5wjjx4-move-docs.sh' '/nix/store/fyaryjvghbkpfnsyw97hb3lyb37s1pd6-move-lib64.sh' '/nix/store/kd4xwxjpjxi71jkm6ka0np72if9rm3y0-move-sbin.sh' '/nix/store/pag6l61paj1dc9sv15l7bm5c17xn5kyk-move-systemd-user-units.sh' '/nix/store/cmzya9irvxzlkh7lfy6i82gbp0saxqj3-multiple-outputs.sh' '/nix/store/x8c40nfigps493a07sdr2pm5s9j1cdc0-patch-shebangs.sh' '/nix/store/cickvswrvann041nqxb0rxilc46svw1n-prune-libtool-files.sh' '/nix/store/xyff06pkhki3qy1ls77w10s0v79c9il0-reproducible-builds.sh' '/nix/store/z7k98578dfzi6l3hsvbivzm7hfqlk0zc-set-source-date-epoch-to-latest.sh' '/nix/store/pilsssjjdxvdphlg2h19p0bfx5q0jzkn-strip.sh' '/nix/store/kbw2j1vag664b3sj3rjwz9v53cqx87sb-gcc-wrapper-15.2.0' '/nix/store/4yi6jj75bb5hhdzpzlxfyf69d35wsf2x-binutils-wrapper-2.44' )
declare -a propagatedHostDepFiles=('propagated-host-host-deps' 'propagated-build-inputs' )
depsHostHostPropagated=''
export depsHostHostPropagated
buildPhase ()
{
 
    runHook preBuild;
    if [[ -z "${makeFlags-}" && -z "${makefile:-}" && ! ( -e Makefile || -e makefile || -e GNUmakefile ) ]]; then
        echo "no Makefile or custom buildPhase, doing nothing";
    else
        foundMakefile=1;
        local flagsArray=(${enableParallelBuilding:+-j${NIX_BUILD_CORES}} SHELL="$SHELL");
        concatTo flagsArray makeFlags makeFlagsArray buildFlags buildFlagsArray;
        echoCmd 'build flags' "${flagsArray[@]}";
        make ${makefile:+-f $makefile} "${flagsArray[@]}";
        unset flagsArray;
    fi;
    runHook postBuild
}
_makeSymlinksRelative ()
{
 
    local prefixes;
    prefixes=();
    for output in $(getAllOutputNames);
    do
        [ ! -e "${!output}" ] && continue;
        prefixes+=("${!output}");
    done;
    find "${prefixes[@]}" -type l -printf '%H\0%p\0' | xargs -0 -n2 -r -P "$NIX_BUILD_CORES" sh -c '
      output="$1"
      link="$2"

      linkTarget=$(readlink "$link")

      # only touch links that point inside the same output tree
      [[ $linkTarget == "$output"/* ]] || exit 0

      if [ ! -e "$linkTarget" ]; then
        echo "the symlink $link is broken, it points to $linkTarget (which is missing)"
      fi

      echo "making symlink relative: $link"
      ln -snrf "$linkTarget" "$link"
    ' _
}
installPhase ()
{
 
    runHook preInstall;
    if [[ -z "${makeFlags-}" && -z "${makefile:-}" && ! ( -e Makefile || -e makefile || -e GNUmakefile ) ]]; then
        echo "no Makefile or custom installPhase, doing nothing";
        runHook postInstall;
        return;
    else
        foundMakefile=1;
    fi;
    if [ -n "$prefix" ]; then
        mkdir -p "$prefix";
    fi;
    local flagsArray=(${enableParallelInstalling:+-j${NIX_BUILD_CORES}} SHELL="$SHELL");
    concatTo flagsArray makeFlags makeFlagsArray installFlags installFlagsArray installTargets=install;
    echoCmd 'install flags' "${flagsArray[@]}";
    make ${makefile:+-f $makefile} "${flagsArray[@]}";
    unset flagsArray;
    runHook postInstall
}
_moveSbin ()
{
 
    if [ "${dontMoveSbin-}" = 1 ]; then
        return;
    fi;
    if [ ! -e "$prefix/sbin" -o -L "$prefix/sbin" ]; then
        return;
    fi;
    echo "moving $prefix/sbin/* to $prefix/bin";
    mkdir -p $prefix/bin;
    shopt -s dotglob;
    for i in $prefix/sbin/*;
    do
        mv "$i" $prefix/bin;
    done;
    shopt -u dotglob;
    rmdir $prefix/sbin;
    ln -s bin $prefix/sbin
}
dumpVars ()
{
 
    if [[ "${noDumpEnvVars:-0}" != 1 && -d "$NIX_BUILD_TOP" ]]; then
        local old_umask;
        old_umask=$(umask);
        umask 0077;
        export 2> /dev/null > "$NIX_BUILD_TOP/env-vars";
        umask "$old_umask";
    fi
}
nixLog ()
{
 
    [[ -z ${NIX_LOG_FD-} ]] && return 0;
    local callerName="${FUNCNAME[1]}";
    if [[ $callerName == "_callImplicitHook" ]]; then
        callerName="${hookName:?}";
    fi;
    printf "%s: %s\n" "$callerName" "$*" >&"$NIX_LOG_FD"
}
getTargetRoleEnvHook ()
{
 
    getRole "$depTargetOffset"
}
patchShebangs ()
{
 
    local pathName;
    local update=false;
    while [[ $# -gt 0 ]]; do
        case "$1" in 
            --host)
                pathName=HOST_PATH;
                shift
            ;;
            --build)
                pathName=PATH;
                shift
            ;;
            --update)
                update=true;
                shift
            ;;
            --)
                shift;
                break
            ;;
            -* | --*)
                echo "Unknown option $1 supplied to patchShebangs" 1>&2;
                return 1
            ;;
            *)
                break
            ;;
        esac;
    done;
    echo "patching script interpreter paths in $@";
    local f;
    local oldPath;
    local newPath;
    local arg0;
    local args;
    local oldInterpreterLine;
    local newInterpreterLine;
    if [[ $# -eq 0 ]]; then
        echo "No arguments supplied to patchShebangs" 1>&2;
        return 0;
    fi;
    local f;
    while IFS= read -r -d '' f; do
        isScript "$f" || continue;
        read -r oldInterpreterLine < "$f" || [ "$oldInterpreterLine" ];
        read -r oldPath arg0 args <<< "${oldInterpreterLine:2}";
        if [[ -z "${pathName:-}" ]]; then
            if [[ -n $strictDeps && $f == "$NIX_STORE"* ]]; then
                pathName=HOST_PATH;
            else
                pathName=PATH;
            fi;
        fi;
        if [[ "$oldPath" == *"/bin/env" ]]; then
            if [[ $arg0 == "-S" ]]; then
                arg0=${args%% *};
                [[ "$args" == *" "* ]] && args=${args#* } || args=;
                newPath="$(PATH="${!pathName}" type -P "env" || true)";
                args="-S $(PATH="${!pathName}" type -P "$arg0" || true) $args";
            else
                if [[ $arg0 == "-"* || $arg0 == *"="* ]]; then
                    echo "$f: unsupported interpreter directive \"$oldInterpreterLine\" (set dontPatchShebangs=1 and handle shebang patching yourself)" 1>&2;
                    exit 1;
                else
                    newPath="$(PATH="${!pathName}" type -P "$arg0" || true)";
                fi;
            fi;
        else
            if [[ -z $oldPath ]]; then
                oldPath="/bin/sh";
            fi;
            newPath="$(PATH="${!pathName}" type -P "$(basename "$oldPath")" || true)";
            args="$arg0 $args";
        fi;
        newInterpreterLine="$newPath $args";
        newInterpreterLine=${newInterpreterLine%${newInterpreterLine##*[![:space:]]}};
        if [[ -n "$oldPath" && ( "$update" == true || "${oldPath:0:${#NIX_STORE}}" != "$NIX_STORE" ) ]]; then
            if [[ -n "$newPath" && "$newPath" != "$oldPath" ]]; then
                echo "$f: interpreter directive changed from \"$oldInterpreterLine\" to \"$newInterpreterLine\"";
                escapedInterpreterLine=${newInterpreterLine//\\/\\\\};
                timestamp=$(stat --printf "%y" "$f");
                tmpFile=$(mktemp -t patchShebangs.XXXXXXXXXX);
                sed -e "1 s|.*|#\!$escapedInterpreterLine|" "$f" > "$tmpFile";
                local restoreReadOnly;
                if [[ ! -w "$f" ]]; then
                    chmod +w "$f";
                    restoreReadOnly=true;
                fi;
                cat "$tmpFile" > "$f";
                rm "$tmpFile";
                if [[ -n "${restoreReadOnly:-}" ]]; then
                    chmod -w "$f";
                fi;
                touch --date "$timestamp" "$f";
            fi;
        fi;
    done < <(find "$@" -type f -perm -0100 -print0)
}
justInstallPhase ()
{
 
    runHook preInstall;
    local flagsArray=();
    concatTo flagsArray justFlags justFlagsArray installTargets=install;
    echoCmd 'install flags' "${flagsArray[@]}";
    just "${flagsArray[@]}";
    runHook postInstall
}
mapOffset ()
{
 
    local -r inputOffset="$1";
    local -n outputOffset="$2";
    if (( inputOffset <= 0 )); then
        outputOffset=$((inputOffset + hostOffset));
    else
        outputOffset=$((inputOffset - 1 + targetOffset));
    fi
}
patchShebangsAuto ()
{
 
    if [[ -z "${dontPatchShebangs-}" && -e "$prefix" ]]; then
        if [[ "$output" != out && "$output" = "$outputDev" ]]; then
            patchShebangs --build "$prefix";
        else
            patchShebangs --host "$prefix";
        fi;
    fi
}
isMachO ()
{
 
    local fn="$1";
    local fd;
    local magic;
    exec {fd}< "$fn";
    LANG=C read -r -n 4 -u "$fd" magic;
    exec {fd}>&-;
    if [[ "$magic" = $(echo -ne "\xfe\xed\xfa\xcf") || "$magic" = $(echo -ne "\xcf\xfa\xed\xfe") ]]; then
        return 0;
    else
        if [[ "$magic" = $(echo -ne "\xfe\xed\xfa\xce") || "$magic" = $(echo -ne "\xce\xfa\xed\xfe") ]]; then
            return 0;
        else
            if [[ "$magic" = $(echo -ne "\xca\xfe\xba\xbe") || "$magic" = $(echo -ne "\xbe\xba\xfe\xca") ]]; then
                return 0;
            else
                return 1;
            fi;
        fi;
    fi
}
toPythonPath ()
{
 
    local paths="$1";
    local result=;
    for i in $paths;
    do
        p="$i/lib/python3.13/site-packages";
        result="${result}${result:+:}$p";
    done;
    echo $result
}
showPhaseHeader ()
{
 
    local phase="$1";
    echo "Running phase: $phase";
    if [[ -z ${NIX_LOG_FD-} ]]; then
        return;
    fi;
    printf "@nix { \"action\": \"setPhase\", \"phase\": \"%s\" }\n" "$phase" >&"$NIX_LOG_FD"
}
getTargetRole ()
{
 
    getRole "$targetOffset"
}
getTargetRoleWrapper ()
{
 
    case $targetOffset in 
        -1)
            export NIX_BINTOOLS_WRAPPER_TARGET_BUILD_x86_64_unknown_linux_gnu=1
        ;;
        0)
            export NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu=1
        ;;
        1)
            export NIX_BINTOOLS_WRAPPER_TARGET_TARGET_x86_64_unknown_linux_gnu=1
        ;;
        *)
            echo "binutils-wrapper-2.44: used as improper sort of dependency" 1>&2;
            return 1
        ;;
    esac
}
distPhase ()
{
 
    runHook preDist;
    local flagsArray=();
    concatTo flagsArray distFlags distFlagsArray distTarget=dist;
    echo 'dist flags: %q' "${flagsArray[@]}";
    make ${makefile:+-f $makefile} "${flagsArray[@]}";
    if [ "${dontCopyDist:-0}" != 1 ]; then
        mkdir -p "$out/tarballs";
        cp -pvd ${tarballs[*]:-*.tar.gz} "$out/tarballs";
    fi;
    runHook postDist
}
_activatePkgs ()
{
 
    local hostOffset targetOffset;
    local pkg;
    for hostOffset in "${allPlatOffsets[@]}";
    do
        local pkgsVar="${pkgAccumVarVars[hostOffset + 1]}";
        for targetOffset in "${allPlatOffsets[@]}";
        do
            (( hostOffset <= targetOffset )) || continue;
            local pkgsRef="${pkgsVar}[$targetOffset - $hostOffset]";
            local pkgsSlice="${!pkgsRef}[@]";
            for pkg in ${!pkgsSlice+"${!pkgsSlice}"};
            do
                activatePackage "$pkg" "$hostOffset" "$targetOffset";
            done;
        done;
    done
}
isELF ()
{
 
    local fn="$1";
    local fd;
    local magic;
    exec {fd}< "$fn";
    LANG=C read -r -n 4 -u "$fd" magic;
    exec {fd}>&-;
    if [ "$magic" = 'ELF' ]; then
        return 0;
    else
        return 1;
    fi
}
pkgConfigWrapper_addPkgConfigPath ()
{
 
    local role_post;
    getHostRoleEnvHook;
    addToSearchPath "PKG_CONFIG_PATH${role_post}" "$1/lib/pkgconfig";
    addToSearchPath "PKG_CONFIG_PATH${role_post}" "$1/share/pkgconfig"
}
printWords ()
{
 
    (( "$#" > 0 )) || return 0;
    printf '%s ' "$@"
}
addPythonPath ()
{
 
    addToSearchPathWithCustomDelimiter : PYTHONPATH $1/lib/python3.13/site-packages
}
noBrokenSymlinksInAllOutputs ()
{
 
    if [[ -z ${dontCheckForBrokenSymlinks-} ]]; then
        for output in $(getAllOutputNames);
        do
            noBrokenSymlinks "${!output}";
        done;
    fi
}
runHook ()
{
 
    local hookName="$1";
    shift;
    local hooksSlice="${hookName%Hook}Hooks[@]";
    local hook;
    for hook in "_callImplicitHook 0 $hookName" ${!hooksSlice+"${!hooksSlice}"};
    do
        _logHook "$hookName" "$hook" "$@";
        _eval "$hook" "$@";
    done;
    return 0
}
nixNoticeLog ()
{
 
    _nixLogWithLevel 2 "$*"
}
_addToEnv ()
{
 
    local depHostOffset depTargetOffset;
    local pkg;
    for depHostOffset in "${allPlatOffsets[@]}";
    do
        local hookVar="${pkgHookVarVars[depHostOffset + 1]}";
        local pkgsVar="${pkgAccumVarVars[depHostOffset + 1]}";
        for depTargetOffset in "${allPlatOffsets[@]}";
        do
            (( depHostOffset <= depTargetOffset )) || continue;
            local hookRef="${hookVar}[$depTargetOffset - $depHostOffset]";
            if [[ -z "${strictDeps-}" ]]; then
                local visitedPkgs="";
                for pkg in "${pkgsBuildBuild[@]}" "${pkgsBuildHost[@]}" "${pkgsBuildTarget[@]}" "${pkgsHostHost[@]}" "${pkgsHostTarget[@]}" "${pkgsTargetTarget[@]}";
                do
                    if [[ "$visitedPkgs" = *"$pkg"* ]]; then
                        continue;
                    fi;
                    runHook "${!hookRef}" "$pkg";
                    visitedPkgs+=" $pkg";
                done;
            else
                local pkgsRef="${pkgsVar}[$depTargetOffset - $depHostOffset]";
                local pkgsSlice="${!pkgsRef}[@]";
                for pkg in ${!pkgsSlice+"${!pkgsSlice}"};
                do
                    runHook "${!hookRef}" "$pkg";
                done;
            fi;
        done;
    done
}
addToSearchPath ()
{
 
    addToSearchPathWithCustomDelimiter ":" "$@"
}
ccWrapper_addCVars ()
{
 
    local role_post;
    getHostRoleEnvHook;
    local found=;
    if [ -d "$1/include" ]; then
        export NIX_CFLAGS_COMPILE${role_post}+=" -isystem $1/include";
        found=1;
    fi;
    if [ -d "$1/Library/Frameworks" ]; then
        export NIX_CFLAGS_COMPILE${role_post}+=" -iframework $1/Library/Frameworks";
        found=1;
    fi;
    if [[ -n "" && -n ${NIX_STORE:-} && -n $found ]]; then
        local scrubbed="$NIX_STORE/eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee-${1#"$NIX_STORE"/*-}";
        export NIX_CFLAGS_COMPILE${role_post}+=" -fmacro-prefix-map=$1=$scrubbed";
    fi
}
_updateSourceDateEpochFromSourceRoot ()
{
 
    if [ -n "$sourceRoot" ]; then
        updateSourceDateEpoch "$sourceRoot";
    fi
}
runOneHook ()
{
 
    local hookName="$1";
    shift;
    local hooksSlice="${hookName%Hook}Hooks[@]";
    local hook ret=1;
    for hook in "_callImplicitHook 1 $hookName" ${!hooksSlice+"${!hooksSlice}"};
    do
        _logHook "$hookName" "$hook" "$@";
        if _eval "$hook" "$@"; then
            ret=0;
            break;
        fi;
    done;
    return "$ret"
}
_addRpathPrefix ()
{
 
    if [ "${NIX_NO_SELF_RPATH:-0}" != 1 ]; then
        export NIX_LDFLAGS="-rpath $1/lib ${NIX_LDFLAGS-}";
    fi
}
isScript ()
{
 
    local fn="$1";
    local fd;
    local magic;
    exec {fd}< "$fn";
    LANG=C read -r -n 2 -u "$fd" magic;
    exec {fd}>&-;
    if [[ "$magic" =~ \#! ]]; then
        return 0;
    else
        return 1;
    fi
}
moveToOutput ()
{
 
    local patt="$1";
    local dstOut="$2";
    local output;
    for output in $(getAllOutputNames);
    do
        if [ "${!output}" = "$dstOut" ]; then
            continue;
        fi;
        local srcPath;
        for srcPath in "${!output}"/$patt;
        do
            if [ ! -e "$srcPath" ] && [ ! -L "$srcPath" ]; then
                continue;
            fi;
            if [ "$dstOut" = REMOVE ]; then
                echo "Removing $srcPath";
                rm -r "$srcPath";
            else
                local dstPath="$dstOut${srcPath#${!output}}";
                echo "Moving $srcPath to $dstPath";
                if [ -d "$dstPath" ] && [ -d "$srcPath" ]; then
                    rmdir "$srcPath" --ignore-fail-on-non-empty;
                    if [ -d "$srcPath" ]; then
                        mv -t "$dstPath" "$srcPath"/*;
                        rmdir "$srcPath";
                    fi;
                else
                    mkdir -p "$(readlink -m "$dstPath/..")";
                    mv "$srcPath" "$dstPath";
                fi;
            fi;
            local srcParent="$(readlink -m "$srcPath/..")";
            if [ -n "$(find "$srcParent" -maxdepth 0 -type d -empty 2> /dev/null)" ]; then
                echo "Removing empty $srcParent/ and (possibly) its parents";
                rmdir -p --ignore-fail-on-non-empty "$srcParent" 2> /dev/null || true;
            fi;
        done;
    done
}
substituteAllInPlace ()
{
 
    local fileName="$1";
    shift;
    substituteAll "$fileName" "$fileName" "$@"
}
updateSourceDateEpoch ()
{
 
    local path="$1";
    [[ $path == -* ]] && path="./$path";
    local -a res=($(find "$path" -type f -not -newer "$NIX_BUILD_TOP/.." -printf '%T@ "%p"\0' | sort -n --zero-terminated | tail -n1 --zero-terminated | head -c -1));
    local time="${res[0]//\.[0-9]*/}";
    local newestFile="${res[1]}";
    if [ "${time:-0}" -gt "$SOURCE_DATE_EPOCH" ]; then
        echo "setting SOURCE_DATE_EPOCH to timestamp $time of file $newestFile";
        export SOURCE_DATE_EPOCH="$time";
        local now="$(date +%s)";
        if [ "$time" -gt $((now - 60)) ]; then
            echo "warning: file $newestFile may be generated; SOURCE_DATE_EPOCH may be non-deterministic";
        fi;
    fi
}
_callImplicitHook ()
{
 
    local def="$1";
    local hookName="$2";
    if declare -F "$hookName" > /dev/null; then
        nixTalkativeLog "calling implicit '$hookName' function hook";
        "$hookName";
    else
        if type -p "$hookName" > /dev/null; then
            nixTalkativeLog "sourcing implicit '$hookName' script hook";
            source "$hookName";
        else
            if [ -n "${!hookName:-}" ]; then
                nixTalkativeLog "evaling implicit '$hookName' string hook";
                eval "${!hookName}";
            else
                return "$def";
            fi;
        fi;
    fi
}
patchPhase ()
{
 
    runHook prePatch;
    local -a patchesArray;
    concatTo patchesArray patches;
    local -a flagsArray;
    concatTo flagsArray patchFlags=-p1;
    for i in "${patchesArray[@]}";
    do
        echo "applying patch $i";
        local uncompress=cat;
        case "$i" in 
            *.gz)
                uncompress="gzip -d"
            ;;
            *.bz2)
                uncompress="bzip2 -d"
            ;;
            *.xz)
                uncompress="xz -d"
            ;;
            *.lzma)
                uncompress="lzma -d"
            ;;
        esac;
        $uncompress < "$i" 2>&1 | patch "${flagsArray[@]}";
    done;
    runHook postPatch
}
fixLibtool ()
{
 
    local search_path;
    for flag in $NIX_LDFLAGS;
    do
        case $flag in 
            -L*)
                search_path+=" ${flag#-L}"
            ;;
        esac;
    done;
    sed -i "$1" -e "s^eval \(sys_lib_search_path=\).*^\1'${search_path:-}'^" -e 's^eval sys_lib_.+search_path=.*^^'
}
updateAutotoolsGnuConfigScriptsPhase ()
{
 
    if [ -n "${dontUpdateAutotoolsGnuConfigScripts-}" ]; then
        return;
    fi;
    for script in config.sub config.guess;
    do
        for f in $(find . -type f -name "$script");
        do
            echo "Updating Autotools / GNU config script to a newer upstream version: $f";
            cp -f "/nix/store/s0xj50a5awma0jwgsqws61014nxzxy19-gnu-config-2024-01-01/$script" "$f";
        done;
    done
}
stripDirs ()
{
 
    local cmd="$1";
    local ranlibCmd="$2";
    local paths="$3";
    local stripFlags="$4";
    local excludeFlags=();
    local pathsNew=;
    [ -z "$cmd" ] && echo "stripDirs: Strip command is empty" 1>&2 && exit 1;
    [ -z "$ranlibCmd" ] && echo "stripDirs: Ranlib command is empty" 1>&2 && exit 1;
    local pattern;
    if [ -n "${stripExclude:-}" ]; then
        for pattern in "${stripExclude[@]}";
        do
            excludeFlags+=(-a '!' '(' -name "$pattern" -o -wholename "$prefix/$pattern" ')');
        done;
    fi;
    local p;
    for p in ${paths};
    do
        if [ -e "$prefix/$p" ]; then
            pathsNew="${pathsNew} $prefix/$p";
        fi;
    done;
    paths=${pathsNew};
    if [ -n "${paths}" ]; then
        echo "stripping (with command $cmd and flags $stripFlags) in $paths";
        local striperr;
        striperr="$(mktemp --tmpdir="$TMPDIR" 'striperr.XXXXXX')";
        find $paths -type f "${excludeFlags[@]}" -a '!' -path "$prefix/lib/debug/*" -printf '%D-%i,%p\0' | sort -t, -k1,1 -u -z | cut -d, -f2- -z | xargs -r -0 -n1 -P "$NIX_BUILD_CORES" -- $cmd $stripFlags 2> "$striperr" || exit_code=$?;
        [[ "$exit_code" = 123 || -z "$exit_code" ]] || ( cat "$striperr" 1>&2 && exit 1 );
        rm "$striperr";
        find $paths -name '*.a' -type f -exec $ranlibCmd '{}' \; 2> /dev/null;
    fi
}
echoCmd ()
{
 
    printf "%s:" "$1";
    shift;
    printf ' %q' "$@";
    echo
}
_multioutDevs ()
{
 
    if [ "$(getAllOutputNames)" = "out" ] || [ -z "${moveToDev-1}" ]; then
        return;
    fi;
    moveToOutput include "${!outputInclude}";
    moveToOutput lib/pkgconfig "${!outputDev}";
    moveToOutput share/pkgconfig "${!outputDev}";
    moveToOutput lib/cmake "${!outputDev}";
    moveToOutput share/aclocal "${!outputDev}";
    for f in "${!outputDev}"/{lib,share}/pkgconfig/*.pc;
    do
        echo "Patching '$f' includedir to output ${!outputInclude}";
        sed -i "/^includedir=/s,=\${prefix},=${!outputInclude}," "$f";
    done
}
_multioutPropagateDev ()
{
 
    if [ "$(getAllOutputNames)" = "out" ]; then
        return;
    fi;
    local outputFirst;
    for outputFirst in $(getAllOutputNames);
    do
        break;
    done;
    local propagaterOutput="$outputDev";
    if [ -z "$propagaterOutput" ]; then
        propagaterOutput="$outputFirst";
    fi;
    if [ -z "${propagatedBuildOutputs+1}" ]; then
        local po_dirty="$outputBin $outputInclude $outputLib";
        set +o pipefail;
        propagatedBuildOutputs=`echo "$po_dirty"             | tr -s ' ' '\n' | grep -v -F "$propagaterOutput"             | sort -u | tr '\n' ' ' `;
        set -o pipefail;
    fi;
    if [ -z "$propagatedBuildOutputs" ]; then
        return;
    fi;
    mkdir -p "${!propagaterOutput}"/nix-support;
    for output in $propagatedBuildOutputs;
    do
        echo -n " ${!output}" >> "${!propagaterOutput}"/nix-support/propagated-build-inputs;
    done
}
addToSearchPathWithCustomDelimiter ()
{
 
    local delimiter="$1";
    local varName="$2";
    local dir="$3";
    if [[ -d "$dir" && "${!varName:+${delimiter}${!varName}${delimiter}}" != *"${delimiter}${dir}${delimiter}"* ]]; then
        export "${varName}=${!varName:+${!varName}${delimiter}}${dir}";
    fi
}
getHostRoleEnvHook ()
{
 
    getRole "$depHostOffset"
}
nixInfoLog ()
{
 
    _nixLogWithLevel 3 "$*"
}
noBrokenSymlinks ()
{
 
    local -r output="${1:?}";
    local path;
    local pathParent;
    local symlinkTarget;
    local -i numDanglingSymlinks=0;
    local -i numReflexiveSymlinks=0;
    local -i numUnreadableSymlinks=0;
    if [[ ! -e $output ]]; then
        nixWarnLog "skipping non-existent output $output";
        return 0;
    fi;
    nixInfoLog "running on $output";
    while IFS= read -r -d '' path; do
        pathParent="$(dirname "$path")";
        if ! symlinkTarget="$(readlink "$path")"; then
            nixErrorLog "the symlink $path is unreadable";
            numUnreadableSymlinks+=1;
            continue;
        fi;
        if [[ $symlinkTarget == /* ]]; then
            nixInfoLog "symlink $path points to absolute target $symlinkTarget";
        else
            nixInfoLog "symlink $path points to relative target $symlinkTarget";
            symlinkTarget="$(realpath --no-symlinks --canonicalize-missing "$pathParent/$symlinkTarget")";
        fi;
        if [[ $symlinkTarget = "$TMPDIR"/* ]]; then
            nixErrorLog "the symlink $path points to $TMPDIR directory: $symlinkTarget";
            numDanglingSymlinks+=1;
            continue;
        fi;
        if [[ $symlinkTarget != "$NIX_STORE"/* ]]; then
            nixInfoLog "symlink $path points outside the Nix store; ignoring";
            continue;
        fi;
        if [[ $path == "$symlinkTarget" ]]; then
            nixErrorLog "the symlink $path is reflexive";
            numReflexiveSymlinks+=1;
        else
            if [[ ! -e $symlinkTarget ]]; then
                nixErrorLog "the symlink $path points to a missing target: $symlinkTarget";
                numDanglingSymlinks+=1;
            else
                nixDebugLog "the symlink $path is irreflexive and points to a target which exists";
            fi;
        fi;
    done < <(find "$output" -type l -print0);
    if ((numDanglingSymlinks > 0 || numReflexiveSymlinks > 0 || numUnreadableSymlinks > 0)); then
        nixErrorLog "found $numDanglingSymlinks dangling symlinks, $numReflexiveSymlinks reflexive symlinks and $numUnreadableSymlinks unreadable symlinks";
        exit 1;
    fi;
    return 0
}
checkPhase ()
{
 
    runHook preCheck;
    if [[ -z "${foundMakefile:-}" ]]; then
        echo "no Makefile or custom checkPhase, doing nothing";
        runHook postCheck;
        return;
    fi;
    if [[ -z "${checkTarget:-}" ]]; then
        if make -n ${makefile:+-f $makefile} check > /dev/null 2>&1; then
            checkTarget="check";
        else
            if make -n ${makefile:+-f $makefile} test > /dev/null 2>&1; then
                checkTarget="test";
            fi;
        fi;
    fi;
    if [[ -z "${checkTarget:-}" ]]; then
        echo "no check/test target in ${makefile:-Makefile}, doing nothing";
    else
        local flagsArray=(${enableParallelChecking:+-j${NIX_BUILD_CORES}} SHELL="$SHELL");
        concatTo flagsArray makeFlags makeFlagsArray checkFlags=VERBOSE=y checkFlagsArray checkTarget;
        echoCmd 'check flags' "${flagsArray[@]}";
        make ${makefile:+-f $makefile} "${flagsArray[@]}";
        unset flagsArray;
    fi;
    runHook postCheck
}
bintoolsWrapper_addLDVars ()
{
 
    local role_post;
    getHostRoleEnvHook;
    if [[ -d "$1/lib64" && ! -L "$1/lib64" ]]; then
        export NIX_LDFLAGS${role_post}+=" -L$1/lib64";
    fi;
    if [[ -d "$1/lib" ]]; then
        local -a glob=($1/lib/lib*);
        if [ "${#glob[*]}" -gt 0 ]; then
            export NIX_LDFLAGS${role_post}+=" -L$1/lib";
        fi;
    fi
}
_defaultUnpack ()
{
 
    local fn="$1";
    local destination;
    if [ -d "$fn" ]; then
        destination="$(stripHash "$fn")";
        if [ -e "$destination" ]; then
            echo "Cannot copy $fn to $destination: destination already exists!";
            echo "Did you specify two \"srcs\" with the same \"name\"?";
            return 1;
        fi;
        cp -r --preserve=timestamps --reflink=auto -- "$fn" "$destination";
    else
        case "$fn" in 
            *.tar.xz | *.tar.lzma | *.txz)
                ( XZ_OPT="--threads=$NIX_BUILD_CORES" xz -d < "$fn";
                true ) | tar xf - --mode=+w --warning=no-timestamp
            ;;
            *.tar | *.tar.* | *.tgz | *.tbz2 | *.tbz)
                tar xf "$fn" --mode=+w --warning=no-timestamp
            ;;
            *)
                return 1
            ;;
        esac;
    fi
}
fixupPhase ()
{
 
    local output;
    for output in $(getAllOutputNames);
    do
        if [ -e "${!output}" ]; then
            chmod -R u+w,u-s,g-s "${!output}";
        fi;
    done;
    runHook preFixup;
    local output;
    for output in $(getAllOutputNames);
    do
        prefix="${!output}" runHook fixupOutput;
    done;
    recordPropagatedDependencies;
    if [ -n "${setupHook:-}" ]; then
        mkdir -p "${!outputDev}/nix-support";
        substituteAll "$setupHook" "${!outputDev}/nix-support/setup-hook";
    fi;
    if [ -n "${setupHooks:-}" ]; then
        mkdir -p "${!outputDev}/nix-support";
        local hook;
        for hook in ${setupHooks[@]};
        do
            local content;
            consumeEntire content < "$hook";
            substituteAllStream content "file '$hook'" >> "${!outputDev}/nix-support/setup-hook";
            unset -v content;
        done;
        unset -v hook;
    fi;
    if [ -n "${propagatedUserEnvPkgs[*]:-}" ]; then
        mkdir -p "${!outputBin}/nix-support";
        printWords "${propagatedUserEnvPkgs[@]}" > "${!outputBin}/nix-support/propagated-user-env-packages";
    fi;
    runHook postFixup
}
appendToVar ()
{
 
    local -n nameref="$1";
    local useArray type;
    if [ -n "$__structuredAttrs" ]; then
        useArray=true;
    else
        useArray=false;
    fi;
    if type=$(declare -p "$1" 2> /dev/null); then
        case "${type#* }" in 
            -A*)
                echo "appendToVar(): ERROR: trying to use appendToVar on an associative array, use variable+=([\"X\"]=\"Y\") instead." 1>&2;
                return 1
            ;;
            -a*)
                useArray=true
            ;;
            *)
                useArray=false
            ;;
        esac;
    fi;
    shift;
    if $useArray; then
        nameref=(${nameref+"${nameref[@]}"} "$@");
    else
        nameref="${nameref-} $*";
    fi
}
nixErrorLog ()
{
 
    _nixLogWithLevel 0 "$*"
}
printLines ()
{
 
    (( "$#" > 0 )) || return 0;
    printf '%s\n' "$@"
}
substitute ()
{
 
    local input="$1";
    local output="$2";
    shift 2;
    if [ ! -f "$input" ]; then
        echo "substitute(): ERROR: file '$input' does not exist" 1>&2;
        return 1;
    fi;
    local content;
    consumeEntire content < "$input";
    if [ -e "$output" ]; then
        chmod +w "$output";
    fi;
    substituteStream content "file '$input'" "$@" > "$output"
}
substituteInPlace ()
{
 
    local -a fileNames=();
    for arg in "$@";
    do
        if [[ "$arg" = "--"* ]]; then
            break;
        fi;
        fileNames+=("$arg");
        shift;
    done;
    if ! [[ "${#fileNames[@]}" -gt 0 ]]; then
        echo "substituteInPlace called without any files to operate on (files must come before options!)" 1>&2;
        return 1;
    fi;
    for file in "${fileNames[@]}";
    do
        substitute "$file" "$file" "$@";
    done
}
_assignFirst ()
{
 
    local varName="$1";
    local _var;
    local REMOVE=REMOVE;
    shift;
    for _var in "$@";
    do
        if [ -n "${!_var-}" ]; then
            eval "${varName}"="${_var}";
            return;
        fi;
    done;
    echo;
    echo "error: _assignFirst: could not find a non-empty variable whose name to assign to ${varName}.";
    echo "       The following variables were all unset or empty:";
    echo "           $*";
    if [ -z "${out:-}" ]; then
        echo '       If you do not want an "out" output in your derivation, make sure to define';
        echo '       the other specific required outputs. This can be achieved by picking one';
        echo "       of the above as an output.";
        echo '       You do not have to remove "out" if you want to have a different default';
        echo '       output, because the first output is taken as a default.';
        echo;
    fi;
    return 1
}
_moveSystemdUserUnits ()
{
 
    if [ "${dontMoveSystemdUserUnits:-0}" = 1 ]; then
        return;
    fi;
    if [ ! -e "${prefix:?}/lib/systemd/user" ]; then
        return;
    fi;
    local source="$prefix/lib/systemd/user";
    local target="$prefix/share/systemd/user";
    echo "moving $source/* to $target";
    mkdir -p "$target";
    ( shopt -s dotglob;
    for i in "$source"/*;
    do
        mv "$i" "$target";
    done );
    rmdir "$source";
    ln -s "$target" "$source"
}
nixDebugLog ()
{
 
    _nixLogWithLevel 6 "$*"
}
prependToVar ()
{
 
    local -n nameref="$1";
    local useArray type;
    if [ -n "$__structuredAttrs" ]; then
        useArray=true;
    else
        useArray=false;
    fi;
    if type=$(declare -p "$1" 2> /dev/null); then
        case "${type#* }" in 
            -A*)
                echo "prependToVar(): ERROR: trying to use prependToVar on an associative array." 1>&2;
                return 1
            ;;
            -a*)
                useArray=true
            ;;
            *)
                useArray=false
            ;;
        esac;
    fi;
    shift;
    if $useArray; then
        nameref=("$@" ${nameref+"${nameref[@]}"});
    else
        nameref="$* ${nameref-}";
    fi
}
sysconfigdataHook ()
{
 
    if [ "$1" = '/nix/store/m1fw8l8y9ycxh5dzispbb7cwl6rra14l-python3-3.13.12' ]; then
        export _PYTHON_HOST_PLATFORM='linux-x86_64';
        export _PYTHON_SYSCONFIGDATA_NAME='_sysconfigdata__linux_x86_64-linux-gnu';
    fi
}
_moveToShare ()
{
 
    if [ -n "$__structuredAttrs" ]; then
        if [ -z "${forceShare-}" ]; then
            forceShare=(man doc info);
        fi;
    else
        forceShare=(${forceShare:-man doc info});
    fi;
    if [[ -z "$out" ]]; then
        return;
    fi;
    for d in "${forceShare[@]}";
    do
        if [ -d "$out/$d" ]; then
            if [ -d "$out/share/$d" ]; then
                echo "both $d/ and share/$d/ exist!";
            else
                echo "moving $out/$d to $out/share/$d";
                mkdir -p $out/share;
                mv $out/$d $out/share/;
            fi;
        fi;
    done
}
auditTmpdir ()
{
 
    local dir="$1";
    [ -e "$dir" ] || return 0;
    echo "checking for references to $TMPDIR/ in $dir...";
    local tmpdir elf_fifo script_fifo;
    tmpdir="$(mktemp -d)";
    elf_fifo="$tmpdir/elf";
    script_fifo="$tmpdir/script";
    mkfifo "$elf_fifo" "$script_fifo";
    ( find "$dir" -type f -not -path '*/.build-id/*' -print0 | while IFS= read -r -d '' file; do
        if isELF "$file"; then
            printf '%s\0' "$file" 1>&3;
        else
            if isScript "$file"; then
                filename=${file##*/};
                dir=${file%/*};
                if [ -e "$dir/.$filename-wrapped" ]; then
                    printf '%s\0' "$file" 1>&4;
                fi;
            fi;
        fi;
    done;
    exec 3>&- 4>&- ) 3> "$elf_fifo" 4> "$script_fifo" & ( xargs -0 -r -P "$NIX_BUILD_CORES" -n 1 sh -c '
            if { printf :; patchelf --print-rpath "$1"; } | grep -q -F ":$TMPDIR/"; then
                echo "RPATH of binary $1 contains a forbidden reference to $TMPDIR/"
                exit 1
            fi
        ' _ < "$elf_fifo" ) & local pid_elf=$!;
    local pid_script;
    ( xargs -0 -r -P "$NIX_BUILD_CORES" -n 1 sh -c '
            if grep -q -F "$TMPDIR/" "$1"; then
                echo "wrapper script $1 contains a forbidden reference to $TMPDIR/"
                exit 1
            fi
        ' _ < "$script_fifo" ) & local pid_script=$!;
    wait "$pid_elf" || { 
        echo "Some binaries contain forbidden references to $TMPDIR/. Check the error above!";
        exit 1
    };
    wait "$pid_script" || { 
        echo "Some scripts contain forbidden references to $TMPDIR/. Check the error above!";
        exit 1
    };
    rm -r "$tmpdir"
}
installCheckPhase ()
{
 
    runHook preInstallCheck;
    if [[ -z "${foundMakefile:-}" ]]; then
        echo "no Makefile or custom installCheckPhase, doing nothing";
    else
        if [[ -z "${installCheckTarget:-}" ]] && ! make -n ${makefile:+-f $makefile} "${installCheckTarget:-installcheck}" > /dev/null 2>&1; then
            echo "no installcheck target in ${makefile:-Makefile}, doing nothing";
        else
            local flagsArray=(${enableParallelChecking:+-j${NIX_BUILD_CORES}} SHELL="$SHELL");
            concatTo flagsArray makeFlags makeFlagsArray installCheckFlags installCheckFlagsArray installCheckTarget=installcheck;
            echoCmd 'installcheck flags' "${flagsArray[@]}";
            make ${makefile:+-f $makefile} "${flagsArray[@]}";
            unset flagsArray;
        fi;
    fi;
    runHook postInstallCheck
}
justCheckPhase ()
{
 
    runHook preCheck;
    if [ -z "${checkTarget:-}" ]; then
        if just -n test > /dev/null 2>&1; then
            checkTarget="test";
        fi;
    fi;
    if [ -z "${checkTarget:-}" ]; then
        echo "no test target found in just, doing nothing";
    else
        local flagsArray=();
        concatTo flagsArray justFlags justFlagsArray checkTarget;
        echoCmd 'check flags' "${flagsArray[@]}";
        just "${flagsArray[@]}";
    fi;
    runHook postCheck
}
nixWarnLog ()
{
 
    _nixLogWithLevel 1 "$*"
}
findInputs ()
{
 
    local -r pkg="$1";
    local -r hostOffset="$2";
    local -r targetOffset="$3";
    (( hostOffset <= targetOffset )) || exit 1;
    local varVar="${pkgAccumVarVars[hostOffset + 1]}";
    local varRef="$varVar[$((targetOffset - hostOffset))]";
    local var="${!varRef}";
    unset -v varVar varRef;
    local varSlice="$var[*]";
    case " ${!varSlice-} " in 
        *" $pkg "*)
            return 0
        ;;
    esac;
    unset -v varSlice;
    eval "$var"'+=("$pkg")';
    if ! [ -e "$pkg" ]; then
        echo "build input $pkg does not exist" 1>&2;
        exit 1;
    fi;
    function mapOffset () 
    { 
        local -r inputOffset="$1";
        local -n outputOffset="$2";
        if (( inputOffset <= 0 )); then
            outputOffset=$((inputOffset + hostOffset));
        else
            outputOffset=$((inputOffset - 1 + targetOffset));
        fi
    };
    local relHostOffset;
    for relHostOffset in "${allPlatOffsets[@]}";
    do
        local files="${propagatedDepFilesVars[relHostOffset + 1]}";
        local hostOffsetNext;
        mapOffset "$relHostOffset" hostOffsetNext;
        (( -1 <= hostOffsetNext && hostOffsetNext <= 1 )) || continue;
        local relTargetOffset;
        for relTargetOffset in "${allPlatOffsets[@]}";
        do
            (( "$relHostOffset" <= "$relTargetOffset" )) || continue;
            local fileRef="${files}[$relTargetOffset - $relHostOffset]";
            local file="${!fileRef}";
            unset -v fileRef;
            local targetOffsetNext;
            mapOffset "$relTargetOffset" targetOffsetNext;
            (( -1 <= hostOffsetNext && hostOffsetNext <= 1 )) || continue;
            [[ -f "$pkg/nix-support/$file" ]] || continue;
            local pkgNext;
            read -r -d '' pkgNext < "$pkg/nix-support/$file" || true;
            for pkgNext in $pkgNext;
            do
                findInputs "$pkgNext" "$hostOffsetNext" "$targetOffsetNext";
            done;
        done;
    done
}
exitHandler ()
{
 
    exitCode="$?";
    set +e;
    if [ -n "${showBuildStats:-}" ]; then
        read -r -d '' -a buildTimes < <(times);
        echo "build times:";
        echo "user time for the shell             ${buildTimes[0]}";
        echo "system time for the shell           ${buildTimes[1]}";
        echo "user time for all child processes   ${buildTimes[2]}";
        echo "system time for all child processes ${buildTimes[3]}";
    fi;
    if (( "$exitCode" != 0 )); then
        runHook failureHook;
        if [ -n "${succeedOnFailure:-}" ]; then
            echo "build failed with exit code $exitCode (ignored)";
            mkdir -p "$out/nix-support";
            printf "%s" "$exitCode" > "$out/nix-support/failed";
            exit 0;
        fi;
    else
        runHook exitHook;
    fi;
    return "$exitCode"
}
_doStrip ()
{
 
    local -ra flags=(dontStripHost dontStripTarget);
    local -ra debugDirs=(stripDebugList stripDebugListTarget);
    local -ra allDirs=(stripAllList stripAllListTarget);
    local -ra stripCmds=(STRIP STRIP_FOR_TARGET);
    local -ra ranlibCmds=(RANLIB RANLIB_FOR_TARGET);
    stripDebugList=${stripDebugList[*]:-lib lib32 lib64 libexec bin sbin Applications Library/Frameworks};
    stripDebugListTarget=${stripDebugListTarget[*]:-};
    stripAllList=${stripAllList[*]:-};
    stripAllListTarget=${stripAllListTarget[*]:-};
    local i;
    for i in ${!stripCmds[@]};
    do
        local -n flag="${flags[$i]}";
        local -n debugDirList="${debugDirs[$i]}";
        local -n allDirList="${allDirs[$i]}";
        local -n stripCmd="${stripCmds[$i]}";
        local -n ranlibCmd="${ranlibCmds[$i]}";
        if [[ -n "${dontStrip-}" || -n "${flag-}" ]] || ! type -f "${stripCmd-}" 2> /dev/null 1>&2; then
            continue;
        fi;
        stripDirs "$stripCmd" "$ranlibCmd" "$debugDirList" "${stripDebugFlags[*]:--S -p}";
        stripDirs "$stripCmd" "$ranlibCmd" "$allDirList" "${stripAllFlags[*]:--s -p}";
    done
}
_overrideFirst ()
{
 
    if [ -z "${!1-}" ]; then
        _assignFirst "$@";
    fi
}
getAllOutputNames ()
{
 
    if [ -n "$__structuredAttrs" ]; then
        echo "${!outputs[*]}";
    else
        echo "$outputs";
    fi
}
getHostRole ()
{
 
    getRole "$hostOffset"
}
unpackFile ()
{
 
    curSrc="$1";
    echo "unpacking source archive $curSrc";
    if ! runOneHook unpackCmd "$curSrc"; then
        echo "do not know how to unpack source archive $curSrc";
        exit 1;
    fi
}
patchELF ()
{
 
    local dir="$1";
    [ -e "$dir" ] || return 0;
    echo "shrinking RPATHs of ELF executables and libraries in $dir";
    local i;
    while IFS= read -r -d '' i; do
        if [[ "$i" =~ .build-id ]]; then
            continue;
        fi;
        if ! isELF "$i"; then
            continue;
        fi;
        echo "shrinking $i";
        patchelf --shrink-rpath "$i" || true;
    done < <(find "$dir" -type f -print0)
}
substituteAllStream ()
{
 
    local -a args=();
    _allFlags;
    substituteStream "$1" "$2" "${args[@]}"
}
nixChattyLog ()
{
 
    _nixLogWithLevel 5 "$*"
}
nixVomitLog ()
{
 
    _nixLogWithLevel 7 "$*"
}
compressManPages ()
{
 
    local dir="$1";
    if [ -L "$dir"/share ] || [ -L "$dir"/share/man ] || [ ! -d "$dir/share/man" ]; then
        return;
    fi;
    echo "gzipping man pages under $dir/share/man/";
    find "$dir"/share/man/ -type f -a '!' -regex '.*\.\(bz2\|gz\|xz\)$' -print0 | xargs -0 -n1 -P "$NIX_BUILD_CORES" gzip -n -f;
    find "$dir"/share/man/ -type l -a '!' -regex '.*\.\(bz2\|gz\|xz\)$' -print0 | sort -z | while IFS= read -r -d '' f; do
        local target;
        target="$(readlink -f "$f")";
        if [ -f "$target".gz ]; then
            ln -sf "$target".gz "$f".gz && rm "$f";
        fi;
    done
}
justBuildPhase ()
{
 
    runHook preBuild;
    local flagsArray=();
    concatTo flagsArray justFlags justFlagsArray;
    echoCmd 'build flags' "${flagsArray[@]}";
    just "${flagsArray[@]}";
    runHook postBuild
}
runPhase ()
{
 
    local curPhase="$*";
    if [[ "$curPhase" = unpackPhase && -n "${dontUnpack:-}" ]]; then
        return;
    fi;
    if [[ "$curPhase" = patchPhase && -n "${dontPatch:-}" ]]; then
        return;
    fi;
    if [[ "$curPhase" = configurePhase && -n "${dontConfigure:-}" ]]; then
        return;
    fi;
    if [[ "$curPhase" = buildPhase && -n "${dontBuild:-}" ]]; then
        return;
    fi;
    if [[ "$curPhase" = checkPhase && -z "${doCheck:-}" ]]; then
        return;
    fi;
    if [[ "$curPhase" = installPhase && -n "${dontInstall:-}" ]]; then
        return;
    fi;
    if [[ "$curPhase" = fixupPhase && -n "${dontFixup:-}" ]]; then
        return;
    fi;
    if [[ "$curPhase" = installCheckPhase && -z "${doInstallCheck:-}" ]]; then
        return;
    fi;
    if [[ "$curPhase" = distPhase && -z "${doDist:-}" ]]; then
        return;
    fi;
    showPhaseHeader "$curPhase";
    dumpVars;
    local startTime endTime;
    startTime=$(date +"%s");
    eval "${!curPhase:-$curPhase}";
    endTime=$(date +"%s");
    showPhaseFooter "$curPhase" "$startTime" "$endTime";
    if [ "$curPhase" = unpackPhase ]; then
        [ -n "${sourceRoot:-}" ] && chmod +x -- "${sourceRoot}";
        cd -- "${sourceRoot:-.}";
    fi
}
activatePackage ()
{
 
    local pkg="$1";
    local -r hostOffset="$2";
    local -r targetOffset="$3";
    (( hostOffset <= targetOffset )) || exit 1;
    if [ -f "$pkg" ]; then
        nixTalkativeLog "sourcing setup hook '$pkg'";
        source "$pkg";
    fi;
    if [[ -z "${strictDeps-}" || "$hostOffset" -le -1 ]]; then
        addToSearchPath _PATH "$pkg/bin";
    fi;
    if (( hostOffset <= -1 )); then
        addToSearchPath _XDG_DATA_DIRS "$pkg/share";
    fi;
    if [[ "$hostOffset" -eq 0 && -d "$pkg/bin" ]]; then
        addToSearchPath _HOST_PATH "$pkg/bin";
    fi;
    if [[ -f "$pkg/nix-support/setup-hook" ]]; then
        nixTalkativeLog "sourcing setup hook '$pkg/nix-support/setup-hook'";
        source "$pkg/nix-support/setup-hook";
    fi
}
printPhases ()
{
 
    definePhases;
    local phase;
    for phase in ${phases[*]};
    do
        printf '%s\n' "$phase";
    done
}
addEnvHooks ()
{
 
    local depHostOffset="$1";
    shift;
    local pkgHookVarsSlice="${pkgHookVarVars[$depHostOffset + 1]}[@]";
    local pkgHookVar;
    for pkgHookVar in "${!pkgHookVarsSlice}";
    do
        eval "${pkgHookVar}s"'+=("$@")';
    done
}
configurePhase ()
{
 
    runHook preConfigure;
    : "${configureScript=}";
    if [[ -z "$configureScript" && -x ./configure ]]; then
        configureScript=./configure;
    fi;
    if [ -z "${dontFixLibtool:-}" ]; then
        export lt_cv_deplibs_check_method="${lt_cv_deplibs_check_method-pass_all}";
        local i;
        find . -iname "ltmain.sh" -print0 | while IFS='' read -r -d '' i; do
            echo "fixing libtool script $i";
            fixLibtool "$i";
        done;
        CONFIGURE_MTIME_REFERENCE=$(mktemp configure.mtime.reference.XXXXXX);
        find . -executable -type f -name configure -exec grep -l 'GNU Libtool is free software; you can redistribute it and/or modify' {} \; -exec touch -r {} "$CONFIGURE_MTIME_REFERENCE" \; -exec sed -i s_/usr/bin/file_file_g {} \; -exec touch -r "$CONFIGURE_MTIME_REFERENCE" {} \;;
        rm -f "$CONFIGURE_MTIME_REFERENCE";
    fi;
    if [[ -z "${dontAddPrefix:-}" && -n "$prefix" ]]; then
        local -r prefixKeyOrDefault="${prefixKey:---prefix=}";
        if [ "${prefixKeyOrDefault: -1}" = " " ]; then
            prependToVar configureFlags "$prefix";
            prependToVar configureFlags "${prefixKeyOrDefault::-1}";
        else
            prependToVar configureFlags "$prefixKeyOrDefault$prefix";
        fi;
    fi;
    if [[ -f "$configureScript" ]]; then
        if [ -z "${dontAddDisableDepTrack:-}" ]; then
            if grep -q dependency-tracking "$configureScript"; then
                prependToVar configureFlags --disable-dependency-tracking;
            fi;
        fi;
        if [ -z "${dontDisableStatic:-}" ]; then
            if grep -q enable-static "$configureScript"; then
                prependToVar configureFlags --disable-static;
            fi;
        fi;
        if [ -z "${dontPatchShebangsInConfigure:-}" ]; then
            patchShebangs --build "$configureScript";
        fi;
    fi;
    if [ -n "$configureScript" ]; then
        local -a flagsArray;
        concatTo flagsArray configureFlags configureFlagsArray;
        echoCmd 'configure flags' "${flagsArray[@]}";
        $configureScript "${flagsArray[@]}";
        unset flagsArray;
    else
        echo "no configure script, doing nothing";
    fi;
    runHook postConfigure
}
concatTo ()
{
 
    local -;
    set -o noglob;
    local -n targetref="$1";
    shift;
    local arg default name type;
    for arg in "$@";
    do
        IFS="=" read -r name default <<< "$arg";
        local -n nameref="$name";
        if [[ -z "${nameref[*]}" && -n "$default" ]]; then
            targetref+=("$default");
        else
            if type=$(declare -p "$name" 2> /dev/null); then
                case "${type#* }" in 
                    -A*)
                        echo "concatTo(): ERROR: trying to use concatTo on an associative array." 1>&2;
                        return 1
                    ;;
                    -a*)
                        targetref+=("${nameref[@]}")
                    ;;
                    *)
                        if [[ "$name" = *"Array" ]]; then
                            nixErrorLog "concatTo(): $name is not declared as array, treating as a singleton. This will become an error in future";
                            targetref+=(${nameref+"${nameref[@]}"});
                        else
                            targetref+=(${nameref-});
                        fi
                    ;;
                esac;
            fi;
        fi;
    done
}
_moveLib64 ()
{
 
    if [ "${dontMoveLib64-}" = 1 ]; then
        return;
    fi;
    if [ ! -e "$prefix/lib64" -o -L "$prefix/lib64" ]; then
        return;
    fi;
    echo "moving $prefix/lib64/* to $prefix/lib";
    mkdir -p $prefix/lib;
    shopt -s dotglob;
    for i in $prefix/lib64/*;
    do
        mv --no-clobber "$i" $prefix/lib;
    done;
    shopt -u dotglob;
    rmdir $prefix/lib64;
    ln -s lib $prefix/lib64
}
_logHook ()
{
 
    if [[ -z ${NIX_LOG_FD-} ]]; then
        return;
    fi;
    local hookKind="$1";
    local hookExpr="$2";
    shift 2;
    if declare -F "$hookExpr" > /dev/null 2>&1; then
        nixTalkativeLog "calling '$hookKind' function hook '$hookExpr'" "$@";
    else
        if type -p "$hookExpr" > /dev/null; then
            nixTalkativeLog "sourcing '$hookKind' script hook '$hookExpr'";
        else
            if [[ "$hookExpr" != "_callImplicitHook"* ]]; then
                local exprToOutput;
                if [[ ${NIX_DEBUG:-0} -ge 5 ]]; then
                    exprToOutput="$hookExpr";
                else
                    local hookExprLine;
                    while IFS= read -r hookExprLine; do
                        hookExprLine="${hookExprLine#"${hookExprLine%%[![:space:]]*}"}";
                        if [[ -n "$hookExprLine" ]]; then
                            exprToOutput+="$hookExprLine\\n ";
                        fi;
                    done <<< "$hookExpr";
                    exprToOutput="${exprToOutput%%\\n }";
                fi;
                nixTalkativeLog "evaling '$hookKind' string hook '$exprToOutput'";
            fi;
        fi;
    fi
}
_nixLogWithLevel ()
{
 
    [[ -z ${NIX_LOG_FD-} || ${NIX_DEBUG:-0} -lt ${1:?} ]] && return 0;
    local logLevel;
    case "${1:?}" in 
        0)
            logLevel=ERROR
        ;;
        1)
            logLevel=WARN
        ;;
        2)
            logLevel=NOTICE
        ;;
        3)
            logLevel=INFO
        ;;
        4)
            logLevel=TALKATIVE
        ;;
        5)
            logLevel=CHATTY
        ;;
        6)
            logLevel=DEBUG
        ;;
        7)
            logLevel=VOMIT
        ;;
        *)
            echo "_nixLogWithLevel: called with invalid log level: ${1:?}" >&"$NIX_LOG_FD";
            return 1
        ;;
    esac;
    local callerName="${FUNCNAME[2]}";
    if [[ $callerName == "_callImplicitHook" ]]; then
        callerName="${hookName:?}";
    fi;
    printf "%s: %s: %s\n" "$logLevel" "$callerName" "${2:?}" >&"$NIX_LOG_FD"
}
_eval ()
{
 
    if declare -F "$1" > /dev/null 2>&1; then
        "$@";
    else
        eval "$1";
    fi
}
definePhases ()
{
 
    if [ -z "${phases[*]:-}" ]; then
        phases="${prePhases[*]:-} unpackPhase patchPhase ${preConfigurePhases[*]:-}             configurePhase ${preBuildPhases[*]:-} buildPhase checkPhase             ${preInstallPhases[*]:-} installPhase ${preFixupPhases[*]:-} fixupPhase installCheckPhase             ${preDistPhases[*]:-} distPhase ${postPhases[*]:-}";
    fi
}
recordPropagatedDependencies ()
{
 
    declare -ra flatVars=(depsBuildBuildPropagated propagatedNativeBuildInputs depsBuildTargetPropagated depsHostHostPropagated propagatedBuildInputs depsTargetTargetPropagated);
    declare -ra flatFiles=("${propagatedBuildDepFiles[@]}" "${propagatedHostDepFiles[@]}" "${propagatedTargetDepFiles[@]}");
    local propagatedInputsIndex;
    for propagatedInputsIndex in "${!flatVars[@]}";
    do
        local propagatedInputsSlice="${flatVars[$propagatedInputsIndex]}[@]";
        local propagatedInputsFile="${flatFiles[$propagatedInputsIndex]}";
        [[ -n "${!propagatedInputsSlice}" ]] || continue;
        mkdir -p "${!outputDev}/nix-support";
        printWords ${!propagatedInputsSlice} > "${!outputDev}/nix-support/$propagatedInputsFile";
    done
}
showPhaseFooter ()
{
 
    local phase="$1";
    local startTime="$2";
    local endTime="$3";
    local delta=$(( endTime - startTime ));
    (( delta < 30 )) && return;
    local H=$((delta/3600));
    local M=$((delta%3600/60));
    local S=$((delta%60));
    echo -n "$phase completed in ";
    (( H > 0 )) && echo -n "$H hours ";
    (( M > 0 )) && echo -n "$M minutes ";
    echo "$S seconds"
}
unpackPhase ()
{
 
    runHook preUnpack;
    if [ -z "${srcs:-}" ]; then
        if [ -z "${src:-}" ]; then
            echo 'variable $src or $srcs should point to the source';
            exit 1;
        fi;
        srcs="$src";
    fi;
    local -a srcsArray;
    concatTo srcsArray srcs;
    local dirsBefore="";
    for i in *;
    do
        if [ -d "$i" ]; then
            dirsBefore="$dirsBefore $i ";
        fi;
    done;
    for i in "${srcsArray[@]}";
    do
        unpackFile "$i";
    done;
    : "${sourceRoot=}";
    if [ -n "${setSourceRoot:-}" ]; then
        runOneHook setSourceRoot;
    else
        if [ -z "$sourceRoot" ]; then
            for i in *;
            do
                if [ -d "$i" ]; then
                    case $dirsBefore in 
                        *\ $i\ *)

                        ;;
                        *)
                            if [ -n "$sourceRoot" ]; then
                                echo "unpacker produced multiple directories";
                                exit 1;
                            fi;
                            sourceRoot="$i"
                        ;;
                    esac;
                fi;
            done;
        fi;
    fi;
    if [ -z "$sourceRoot" ]; then
        echo "unpacker appears to have produced no directories";
        exit 1;
    fi;
    echo "source root is $sourceRoot";
    if [ "${dontMakeSourcesWritable:-0}" != 1 ]; then
        chmod -R u+w -- "$sourceRoot";
    fi;
    runHook postUnpack
}
_allFlags ()
{
 
    export system pname name version;
    while IFS='' read -r varName; do
        nixTalkativeLog "@${varName}@ -> ${!varName}";
        args+=("--subst-var" "$varName");
    done < <(awk 'BEGIN { for (v in ENVIRON) if (v ~ /^[a-z][a-zA-Z0-9_]*$/) print v }')
}
consumeEntire ()
{
 
    if IFS='' read -r -d '' "$1"; then
        echo "consumeEntire(): ERROR: Input null bytes, won't process" 1>&2;
        return 1;
    fi
}
substituteAll ()
{
 
    local input="$1";
    local output="$2";
    local -a args=();
    _allFlags;
    substitute "$input" "$output" "${args[@]}"
}
concatStringsSep ()
{
 
    local sep="$1";
    local name="$2";
    local type oldifs;
    if type=$(declare -p "$name" 2> /dev/null); then
        local -n nameref="$name";
        case "${type#* }" in 
            -A*)
                echo "concatStringsSep(): ERROR: trying to use concatStringsSep on an associative array." 1>&2;
                return 1
            ;;
            -a*)
                local IFS="$(printf '\036')"
            ;;
            *)
                local IFS=" "
            ;;
        esac;
        local ifs_separated="${nameref[*]}";
        echo -n "${ifs_separated//"$IFS"/"$sep"}";
    fi
}
getRole ()
{
 
    case $1 in 
        -1)
            role_post='_FOR_BUILD'
        ;;
        0)
            role_post=''
        ;;
        1)
            role_post='_FOR_TARGET'
        ;;
        *)
            echo "binutils-wrapper-2.44: used as improper sort of dependency" 1>&2;
            return 1
        ;;
    esac
}
nixTalkativeLog ()
{
 
    _nixLogWithLevel 4 "$*"
}
genericBuild ()
{
 
    export GZIP_NO_TIMESTAMPS=1;
    if [ -f "${buildCommandPath:-}" ]; then
        source "$buildCommandPath";
        return;
    fi;
    if [ -n "${buildCommand:-}" ]; then
        eval "$buildCommand";
        return;
    fi;
    definePhases;
    for curPhase in ${phases[*]};
    do
        runPhase "$curPhase";
    done
}
stripHash ()
{
 
    local strippedName casematchOpt=0;
    strippedName="$(basename -- "$1")";
    shopt -q nocasematch && casematchOpt=1;
    shopt -u nocasematch;
    if [[ "$strippedName" =~ ^[a-z0-9]{32}- ]]; then
        echo "${strippedName:33}";
    else
        echo "$strippedName";
    fi;
    if (( casematchOpt )); then
        shopt -s nocasematch;
    fi
}
_pruneLibtoolFiles ()
{
 
    if [ "${dontPruneLibtoolFiles-}" ] || [ ! -e "$prefix" ]; then
        return;
    fi;
    find "$prefix" -type f -name '*.la' -exec grep -q '^# Generated by .*libtool' {} \; -exec grep -q "^old_library=''" {} \; -exec sed -i {} -e "/^dependency_libs='[^']/ c dependency_libs='' #pruned" \;
}
_multioutConfig ()
{
 
    if [ "$(getAllOutputNames)" = "out" ] || [ -z "${setOutputFlags-1}" ]; then
        return;
    fi;
    if [ -z "${shareDocName:-}" ]; then
        local confScript="${configureScript:-}";
        if [ -z "$confScript" ] && [ -x ./configure ]; then
            confScript=./configure;
        fi;
        if [ -f "$confScript" ]; then
            local shareDocName="$(sed -n "s/^PACKAGE_TARNAME='\(.*\)'$/\1/p" < "$confScript")";
        fi;
        if [ -z "$shareDocName" ] || echo "$shareDocName" | grep -q '[^a-zA-Z0-9_-]'; then
            shareDocName="$(echo "$name" | sed 's/-[^a-zA-Z].*//')";
        fi;
    fi;
    prependToVar configureFlags --bindir="${!outputBin}"/bin --sbindir="${!outputBin}"/sbin --includedir="${!outputInclude}"/include --mandir="${!outputMan}"/share/man --infodir="${!outputInfo}"/share/info --docdir="${!outputDoc}"/share/doc/"${shareDocName}" --libdir="${!outputLib}"/lib --libexecdir="${!outputLib}"/libexec --localedir="${!outputLib}"/share/locale;
    prependToVar installFlags pkgconfigdir="${!outputDev}"/lib/pkgconfig m4datadir="${!outputDev}"/share/aclocal aclocaldir="${!outputDev}"/share/aclocal
}
substituteStream ()
{
 
    local var=$1;
    local description=$2;
    shift 2;
    while (( "$#" )); do
        local replace_mode="$1";
        case "$1" in 
            --replace)
                if ! "$_substituteStream_has_warned_replace_deprecation"; then
                    echo "substituteStream() in derivation $name: WARNING: '--replace' is deprecated, use --replace-{fail,warn,quiet}. ($description)" 1>&2;
                    _substituteStream_has_warned_replace_deprecation=true;
                fi;
                replace_mode='--replace-warn'
            ;&
            --replace-quiet | --replace-warn | --replace-fail)
                pattern="$2";
                replacement="$3";
                shift 3;
                if ! [[ "${!var}" == *"$pattern"* ]]; then
                    if [ "$replace_mode" == --replace-warn ]; then
                        printf "substituteStream() in derivation $name: WARNING: pattern %q doesn't match anything in %s\n" "$pattern" "$description" 1>&2;
                    else
                        if [ "$replace_mode" == --replace-fail ]; then
                            printf "substituteStream() in derivation $name: ERROR: pattern %q doesn't match anything in %s\n" "$pattern" "$description" 1>&2;
                            return 1;
                        fi;
                    fi;
                fi;
                eval "$var"'=${'"$var"'//"$pattern"/"$replacement"}'
            ;;
            --subst-var)
                local varName="$2";
                shift 2;
                if ! [[ "$varName" =~ ^[a-zA-Z_][a-zA-Z0-9_]*$ ]]; then
                    echo "substituteStream() in derivation $name: ERROR: substitution variables must be valid Bash names, \"$varName\" isn't." 1>&2;
                    return 1;
                fi;
                if [ -z ${!varName+x} ]; then
                    echo "substituteStream() in derivation $name: ERROR: variable \$$varName is unset" 1>&2;
                    return 1;
                fi;
                pattern="@$varName@";
                replacement="${!varName}";
                eval "$var"'=${'"$var"'//"$pattern"/"$replacement"}'
            ;;
            --subst-var-by)
                pattern="@$2@";
                replacement="$3";
                eval "$var"'=${'"$var"'//"$pattern"/"$replacement"}';
                shift 3
            ;;
            *)
                echo "substituteStream() in derivation $name: ERROR: Invalid command line argument: $1" 1>&2;
                return 1
            ;;
        esac;
    done;
    printf "%s" "${!var}"
}
_multioutDocs ()
{
 
    local REMOVE=REMOVE;
    moveToOutput share/info "${!outputInfo}";
    moveToOutput share/doc "${!outputDoc}";
    moveToOutput share/gtk-doc "${!outputDevdoc}";
    moveToOutput share/devhelp/books "${!outputDevdoc}";
    moveToOutput share/man "${!outputMan}";
    moveToOutput share/man/man3 "${!outputDevman}"
}
PATH="$PATH${nix_saved_PATH:+:$nix_saved_PATH}"
XDG_DATA_DIRS="$XDG_DATA_DIRS${nix_saved_XDG_DATA_DIRS:+:$nix_saved_XDG_DATA_DIRS}"

eval "${shellHook:-}"
shopt -s expand_aliases

exec npx tsx test.ts