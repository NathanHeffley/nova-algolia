# Algolia integration with Laravel Nova.

[![Latest Stable Version](https://poser.pugx.org/nathanheffley/nova-algolia/v/stable?format=flat)](https://packagist.org/packages/nathanheffley/nova-algolia)
[![Total Downloads](https://poser.pugx.org/nathanheffley/nova-algolia/downloads?format=flat)](https://packagist.org/packages/nathanheffley/nova-algolia)

<img alt="image" src="https://raw.githubusercontent.com/NathanHeffley/nova-algolia/master/resource-tool.png">

## Installation

You can install the package in any Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require nathanheffley/nova-algolia
```

To view your indexed search data for a `Searchable` model, you'll need to add the tool to that model's Nova resource. Make sure to specify the class name so the resource tool can load it properly.

```php
// in app/Nova/ResourceName.php

public function fields(Request $request)
{
    return [
        // ...

        \NathanHeffley\NovaAlgolia\AlgoliaResourceTool::make()->className(\App\ModelName::class),
    ];
}
```

If you want to use the "Import to Algolia" or "Remove from Algolia" actions, you just need to add them to the actions array on your Nova resource.

```php
// in app/Nova/ResourceName.php

public function actions(Request $request)
{
    return [
        // ...

        new \NathanHeffley\NovaAlgolia\Actions\ImportAlgolia,
        new \NathanHeffley\NovaAlgolia\Actions\RemoveAlgolia,
    ];
}
```

If you have not set up Scout or Algolia yet, follow the directions from the official instructions: [Algolia and Laravel Scout](https://www.algolia.com/doc/api-client/laravel/algolia-and-scout/).

## License

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.
