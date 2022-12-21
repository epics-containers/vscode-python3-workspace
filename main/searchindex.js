Search.setIndex({"docnames": ["developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/make-release", "developer/how-to/run-tests", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "index", "user/explanations/docs-structure", "user/explanations/features", "user/how-to/view-html", "user/index", "user/tutorials/customize", "user/tutorials/prepare", "user/tutorials/purpose", "user/tutorials/workspace"], "filenames": ["developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/make-release.rst", "developer/how-to/run-tests.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "index.rst", "user/explanations/docs-structure.rst", "user/explanations/features.rst", "user/how-to/view-html.rst", "user/index.rst", "user/tutorials/customize.rst", "user/tutorials/prepare.rst", "user/tutorials/purpose.rst", "user/tutorials/workspace.rst"], "titles": ["Architectural Decision Records", "1. Record architecture decisions", "Build the docs using sphinx", "Contributing to the project", "Make a release", "Run the tests using pytest", "Developer Guide", "Standards", "Local Build and Test", "dev-u22", "About the documentation", "Features of dev-u22", "View generated HTML", "User Guide", "Personalizing the Devcontainer", "Prepare your workstation", "Why to use dev-u22", "Creating a Devcontainer Workspace"], "terms": {"we": [0, 1, 3, 5, 7, 12], "major": 0, "adr": [0, 1], "describ": [0, 1, 14], "michael": [0, 1], "nygard": [0, 1], "below": [0, 14], "i": [0, 3, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 17], "list": 0, "our": [0, 15], "current": [0, 15], "1": [0, 7, 15], "date": 1, "2022": 1, "02": 1, "18": 1, "accept": 1, "need": [1, 7, 10, 11, 14, 15], "made": 1, "thi": [1, 2, 4, 5, 7, 8, 9, 10, 11, 14, 15, 16, 17], "project": [1, 2, 5, 6, 9, 11, 14, 16], "us": [1, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17], "see": [1, 2, 4, 11, 17], "": [1, 17], "articl": 1, "link": [1, 6, 13], "abov": [1, 8, 15, 17], "To": [1, 4, 15], "creat": [1, 4, 8, 11, 13, 14, 15, 16], "new": [1, 3, 4, 13, 14], "copi": [1, 11, 15], "past": 1, "from": [1, 2, 6, 7, 11, 13, 15, 17], "exist": [1, 3], "ones": 1, "you": [2, 3, 4, 5, 8, 11, 12, 14, 15, 16, 17], "can": [2, 3, 5, 12, 14, 15, 16], "base": [2, 9, 16, 17], "directori": [2, 7, 8, 11], "run": [2, 3, 6, 11, 15], "make_doc": 2, "sh": [2, 14], "static": 2, "The": [2, 3, 8, 9, 10, 11, 14, 15], "built": 2, "html": [2, 13], "open": [2, 3, 12, 17], "local": [2, 6], "web": 2, "brows": 2, "firefox": 2, "index": 2, "also": [2, 3, 5, 6, 11, 13, 15], "an": [2, 8, 17], "process": [2, 7], "which": [2, 11], "watch": 2, "your": [2, 3, 11, 13, 14, 16], "chang": [2, 3, 8, 9, 14, 16], "rebuild": [2, 14], "whenev": 2, "reload": 2, "ani": [2, 3, 14, 16], "browser": [2, 12], "page": [2, 4, 5, 7], "t": [2, 3, 5, 8, 10, 12, 15, 16, 17], "view": [2, 13], "localhost": [2, 15], "http": [2, 4, 9, 12, 15], "8000": 2, "If": [2, 3, 8, 14], "ar": [2, 3, 7, 10, 11, 14, 15, 17], "make": [2, 3, 6, 9, 14, 15, 16], "sourc": [2, 9, 16], "code": [2, 3, 9, 17], "too": 2, "tell": [2, 11], "tox": [2, 5], "e": [2, 5, 15], "src": 2, "most": [3, 10, 17], "welcom": 3, "all": [3, 11, 14], "pull": 3, "request": 3, "handl": 3, "through": 3, "github": [3, 4, 8, 9], "pleas": [3, 4, 7], "check": [3, 5], "befor": [3, 11], "file": [3, 11, 12, 14, 15, 17], "one": [3, 10], "have": [3, 5, 8, 11, 12, 14, 15, 16, 17], "great": 3, "idea": [3, 17], "involv": 3, "big": 3, "ticket": 3, "want": [3, 15, 17], "sure": [3, 15], "don": [3, 5, 12, 15, 16, 17], "spend": 3, "time": 3, "someth": 3, "might": 3, "fit": 3, "scope": 3, "offer": 3, "place": 3, "ask": 3, "question": 3, "share": [3, 11], "end": 3, "obviou": 3, "when": [3, 5, 14], "close": 3, "rais": 3, "instead": [3, 8], "contain": [3, 7, 9, 15, 16, 17], "inform": [3, 10], "set": [3, 9, 11, 14, 15], "up": [3, 6, 9, 11, 15, 16], "environ": [3, 9, 11, 14, 15, 16], "test": [3, 6], "what": 3, "standard": [3, 6], "document": [3, 6, 13], "should": [3, 11], "follow": [3, 4, 7, 8, 15, 17], "checklist": 4, "choos": [4, 12, 14, 17], "pep440": 4, "compliant": 4, "number": [4, 14], "pep": 4, "python": [4, 9, 14, 16], "org": 4, "0440": 4, "go": 4, "draft": 4, "click": [4, 12], "tag": [4, 8], "suppli": 4, "chose": 4, "gener": [4, 9, 13, 16], "note": [4, 13, 14, 17], "review": 4, "edit": [4, 17], "titl": [4, 7], "publish": 4, "push": 4, "main": 4, "branch": [4, 11], "ha": [4, 9, 16, 17], "same": [4, 14], "effect": 4, "except": 4, "get": [4, 6, 14, 15, 17], "option": [4, 14, 15, 16], "todo": [5, 7, 11, 15, 17], "yet": 5, "do": [5, 7, 14, 15, 16], "probabl": 5, "correct": 5, "done": 5, "It": 5, "find": 5, "function": [5, 7, 10], "look": [5, 15], "like": [5, 15, 17], "them": 5, "error": 5, "report": 5, "coverag": 5, "commandlin": 5, "cov": 5, "xml": 5, "split": [6, 9, 13], "four": [6, 10, 13], "categori": [6, 13], "access": [6, 13, 15], "side": [6, 13], "bar": [6, 13], "build": [6, 7, 16], "contribut": [6, 9], "doc": [6, 7], "sphinx": [6, 7], "pytest": 6, "releas": [6, 9, 13], "practic": [6, 13], "step": [6, 13, 14, 17], "dai": 6, "dev": [6, 8, 13, 17], "task": 6, "architectur": 6, "decis": 6, "record": 6, "why": [6, 13], "technic": [6, 10, 13], "materi": [6, 13], "repo": [7, 14, 17], "other": [7, 9, 14, 16], "than": [7, 12], "dockerfil": [7, 8, 14, 17], "defin": [7, 14, 17], "develop": [7, 9, 14, 15, 16, 17], "some": [7, 15, 17], "docstr": 7, "pre": [7, 11], "napoleon": 7, "extens": 7, "As": [7, 17], "googl": 7, "style": 7, "consid": 7, "repositori": [7, 9], "type": [7, 15], "hint": 7, "signatur": 7, "For": 7, "exampl": [7, 15], "def": 7, "func": 7, "arg1": 7, "str": 7, "arg2": 7, "int": 7, "bool": 7, "summari": 7, "line": 7, "extend": 7, "descript": 7, "arg": [7, 15], "return": 7, "valu": 7, "true": 7, "extract": 7, "api": [7, 11, 13, 15], "underlin": 7, "convent": 7, "headl": 7, "head": 7, "2": [7, 9, 15], "3": 7, "how": [7, 10], "guid": [7, 9, 10], "first": 8, "git": [8, 11, 17], "com": [8, 12], "epic": [8, 9, 16, 17], "u22": [8, 13, 17], "command": [8, 15], "podman": [8, 11, 15], "dev_u22": 8, "docker": [8, 11, 15], "just": 8, "imag": [8, 14], "name": [8, 15], "There": [8, 10], "launch": [8, 11, 15], "script": [8, 15, 17], "outsid": 8, "vscode": [8, 9, 12, 14, 15, 17], "allow": 8, "without": [8, 14], "devcontain": [8, 9, 11, 12, 13, 15, 16], "launch_dev_podman": 8, "launch_dev_dock": 8, "A": 9, "ubuntu": 9, "22": 9, "04": 9, "lt": 9, "provid": [9, 11, 12, 16], "complet": 9, "portabl": [9, 16], "customiz": [9, 16], "work": [9, 13, 15, 17], "ioc": [9, 16], "support": [9, 11], "modul": [9, 11, 16], "soft": 9, "two": 9, "companion": 9, "easi": 9, "workspac": [9, 13, 14], "upon": 9, "python3": [9, 16], "pip": [9, 16], "skeleton": [9, 11, 16], "recommend": 9, "requir": [9, 10, 14, 16], "within": 9, "io": [9, 15], "section": 9, "user": [9, 11, 15], "instal": [9, 12, 13, 14, 15, 16], "back": 9, "grand": 10, "unifi": 10, "theori": [10, 15], "david": 10, "la": 10, "secret": [10, 15], "understood": 10, "order": [10, 11], "write": 10, "good": 10, "softwar": [10, 16], "isn": 10, "thing": [10, 15], "call": [10, 17], "thei": [10, 11], "tutori": 10, "refer": [10, 13], "explan": 10, "repres": 10, "differ": [10, 14], "purpos": 10, "approach": 10, "creation": [10, 14], "understand": 10, "implic": 10, "help": 10, "improv": 10, "often": 10, "immens": 10, "more": [10, 13, 16], "topic": 10, "includ": [11, 13], "runtim": [11, 16], "insid": [11, 12, 17], "connect": [11, 15], "instanc": [11, 14], "host": [11, 16], "kubectl": [11, 15], "helm": 11, "oidc": [11, 15], "login": [11, 15], "kubeconfig": 11, "point": [11, 15, 17], "configur": [11, 15, 16], "pick": 11, "cluster": [11, 15], "dl": [11, 15], "either": 11, "load": 11, "pollux": [11, 15], "add": [11, 14, 16, 17], "home": [11, 15], "export": 11, "kube": [11, 15], "config_pollux": 11, "mount": 11, "folder": [11, 17], "dls_sw": [11, 15], "app": [11, 15], "argu": 11, "OR": [11, 15], "crt": [11, 15], "prepar": [11, 13], "class": 11, "namespac": [11, 15], "In": 11, "comment": 11, "out": [11, 15, 17], "venv": [11, 17], "alreadi": [11, 15], "path": 11, "popul": 11, "depend": [11, 16], "free": [11, 17], "addit": [11, 14], "conflict": 11, "usual": 11, "root": 11, "bashrc": 11, "start": [11, 13, 14, 15], "bash": [11, 15], "profil": 11, "autocomplet": 11, "histori": 11, "shell": 11, "prompt": 11, "so": [12, 16], "less": 12, "conveni": 12, "rather": 12, "plugin": 12, "marketplac": 12, "visualstudio": 12, "item": 12, "itemnam": 12, "peakchen90": 12, "simpli": 12, "right": [12, 16], "explor": 12, "default": [12, 17], "workstat": 13, "person": [13, 17], "typic": 13, "usag": 13, "here": [13, 16], "experienc": 13, "featur": 13, "about": 13, "librari": 13, "wai": 13, "clone": [14, 17], "each": 14, "mai": 14, "fork": [14, 17], "kei": 14, "wish": 14, "packag": 14, "setup": [14, 16], "postcreatecommand": 14, "execut": 14, "gitignor": 14, "becaus": 14, "multipl": 14, "per": 14, "basi": 14, "dirti": 14, "doe": 14, "remov": 14, "tidi": [15, 17], "flesh": [15, 17], "howev": [15, 16], "onc": [15, 17], "onli": 15, "4": 15, "higher": 15, "recent": 15, "version": 15, "73": 15, "newer": 15, "autossh": 15, "sock": 15, "proxi": 15, "commun": 15, "kubernet": 15, "directli": [15, 17], "g": 15, "config": 15, "bin": 15, "pgrep": 15, "echo": 15, "els": 15, "nohup": 15, "n": 15, "d9090": 15, "o": 15, "serveraliveinterv": 15, "10": 15, "auser": 15, "ssh": 15, "diamond": 15, "ac": 15, "uk": 15, "tmp": 15, "log": 15, "fi": 15, "after": 15, "storag": 15, "conf": 15, "specifi": 15, "overlai": 15, "driver": 15, "mount_program": 15, "fuse": 15, "overlayf": 15, "apivers": 15, "v1": 15, "certif": 15, "author": 15, "pollux_ca": 15, "server": 15, "6443": 15, "url": 15, "socks5": 15, "9090": 15, "context": 15, "bl45p": 15, "kind": 15, "prefer": 15, "exec": 15, "client": 15, "authent": 15, "k8": 15, "v1beta1": 15, "token": 15, "issuer": 15, "keycloak": 15, "auth": 15, "realm": 15, "id": 15, "redact": 15, "grant": 15, "password": 15, "cach": 15, "dir": 15, "gile": 15, "would": 15, "ca": 15, "replac": 15, "usernam": 15, "togeth": 16, "mean": 16, "freedom": 16, "system": 16, "even": 16, "machin": 16, "bring": 16, "quickli": 16, "archiv": 16, "along": 16, "reproduc": 16, "later": 16, "collabor": 16, "longer": 16, "lengthi": 16, "etc": 16, "think": 16, "sai": 16, "wa": 16, "custom": [16, 17], "applic": 16, "linux": 16, "These": 17, "cd": 17, "root_folder_for_your_new_workspac": 17, "save": 17, "filenam": 17, "import": 17, "ctrl": 17, "shift": 17, "p": 17, "reopen": 17, "At": 17, "singl": 17, "plu": 17, "now": 17, "termin": 17, "your_org": 17, "your_first_repo_for_this_workspac": 17, "That": 17, "pie": 17, "non": 17, "skip": 17, "h": 17, "detail": 17}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"architectur": [0, 1], "decis": [0, 1], "record": [0, 1], "1": 1, "statu": 1, "context": 1, "consequ": 1, "build": [2, 8, 14], "doc": 2, "us": [2, 5, 16], "sphinx": 2, "autobuild": 2, "contribut": 3, "project": [3, 17], "issu": 3, "discuss": 3, "develop": [3, 6], "guid": [3, 6, 13], "make": 4, "releas": 4, "run": [5, 8], "test": [5, 8], "pytest": 5, "tutori": [6, 13], "how": [6, 9, 13], "explan": [6, 13], "refer": 6, "standard": 7, "code": 7, "document": [7, 9, 10], "local": 8, "clone": 8, "repositori": 8, "contain": [8, 11, 14], "dev": [9, 11, 16], "u22": [9, 11, 16], "i": 9, "structur": 9, "about": 10, "featur": 11, "epic": 11, "base": 11, "tool": 11, "kubernet": 11, "cli": 11, "global": [11, 17], "virtualenv": 11, "bashrc_dev": 11, "view": 12, "gener": 12, "html": 12, "user": 13, "person": 14, "devcontain": [14, 17], "custom": 14, "launch": 14, "time": 14, "prepar": 15, "your": [15, 17], "workstat": 15, "why": 16, "creat": 17, "workspac": 17, "instal": 17, "python": 17, "virtual": 17, "environ": 17}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Architectural Decision Records": [[0, "architectural-decision-records"]], "1. Record architecture decisions": [[1, "record-architecture-decisions"]], "Status": [[1, "status"]], "Context": [[1, "context"]], "Decision": [[1, "decision"]], "Consequences": [[1, "consequences"]], "Build the docs using sphinx": [[2, "build-the-docs-using-sphinx"]], "Autobuild": [[2, "autobuild"]], "Contributing to the project": [[3, "contributing-to-the-project"]], "Issue or Discussion?": [[3, "issue-or-discussion"]], "Developer guide": [[3, "developer-guide"]], "Make a release": [[4, "make-a-release"]], "Run the tests using pytest": [[5, "run-the-tests-using-pytest"]], "Developer Guide": [[6, "developer-guide"]], "Tutorials": [[6, null], [13, null]], "How-to Guides": [[6, null], [13, null]], "Explanations": [[6, null], [13, null]], "Reference": [[6, null]], "Standards": [[7, "standards"]], "Coding Standards": [[7, "coding-standards"]], "Documentation Standards": [[7, "documentation-standards"]], "Local Build and Test": [[8, "local-build-and-test"]], "Clone the repository": [[8, "clone-the-repository"]], "Build the container": [[8, "build-the-container"]], "Run the container": [[8, "run-the-container"]], "dev-u22": [[9, "dev-u22"]], "How the documentation is structured": [[9, "how-the-documentation-is-structured"]], "About the documentation": [[10, "about-the-documentation"]], "Features of dev-u22": [[11, "features-of-dev-u22"]], "EPICS Base tools": [[11, "epics-base-tools"]], "Containers in Containers": [[11, "containers-in-containers"]], "Kubernetes CLI tools": [[11, "kubernetes-cli-tools"]], "Global VirtualEnv": [[11, "global-virtualenv"]], ".bashrc_dev": [[11, "bashrc-dev"]], "View generated HTML": [[12, "view-generated-html"]], "User Guide": [[13, "user-guide"]], "Personalizing the Devcontainer": [[14, "personalizing-the-devcontainer"]], "Customization at container launch time": [[14, "customization-at-container-launch-time"]], "Customization at container build time": [[14, "customization-at-container-build-time"]], "Prepare your workstation": [[15, "prepare-your-workstation"]], "Why to use dev-u22": [[16, "why-to-use-dev-u22"]], "Creating a Devcontainer Workspace": [[17, "creating-a-devcontainer-workspace"]], "Create a workspace": [[17, "create-a-workspace"]], "Install your python projects into the global virtual environment": [[17, "install-your-python-projects-into-the-global-virtual-environment"]]}, "indexentries": {}})