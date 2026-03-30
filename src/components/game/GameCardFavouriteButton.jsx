import React from 'react';
import { Heart } from 'lucide-react';
import { useFavourites } from '../../context/FavouritesContext';
import { buildFavouriteGameId } from '../../utils/favouriteGames';

/**
 * Heart overlay — top-right on game cards. Stops propagation so parent tiles don’t fire.
 * Reusable anywhere you have category, name, provider (same id as Favourites list).
 *
 * @param {'md'|'sm'} size
 */
export default function GameCardFavouriteButton({
    category,
    name,
    provider = '',
    imgUrl = '',
    navigatePage = null,
    size = 'md',
    className = '',
}) {
    const { toggle, isFavourite } = useFavourites();
    const id = buildFavouriteGameId(category, name, provider);
    const active = isFavourite(id);
    const dim =
        size === 'sm'
            ? 'h-[34px] w-[34px] min-h-[34px] min-w-[34px]'
            : 'h-[38px] w-[38px] min-h-[38px] min-w-[38px] sm:h-[42px] sm:w-[42px] sm:min-h-[42px] sm:min-w-[42px]';

    return (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle({ id, category, name, provider, imgUrl, navigatePage });
                e.currentTarget.blur();
            }}
            className={`absolute right-2 top-2 z-30 flex ${dim} items-center justify-center rounded-xl border border-white/20 bg-[linear-gradient(180deg,rgba(8,34,74,0.96)_0%,rgba(11,58,126,0.94)_100%)] text-white shadow-[0_10px_22px_rgba(5,20,45,0.34),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition duration-300 hover:scale-105 hover:border-[rgb(111_197_255_/_0.7)] hover:text-white hover:shadow-[0_14px_28px_rgba(7,30,68,0.42),0_0_0_1px_rgba(111,197,255,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(117_207_255)] md:group-hover:border-[rgb(111_197_255_/_0.75)] md:group-hover:bg-[linear-gradient(180deg,rgba(18,91,197,0.98)_0%,rgba(9,55,128,0.98)_100%)] md:group-hover:text-white md:group-hover:shadow-[0_16px_30px_rgba(7,37,84,0.45),0_0_0_1px_rgba(111,197,255,0.2),inset_0_1px_0_rgba(255,255,255,0.22)] ${active ? 'border-rose-200 bg-[linear-gradient(180deg,rgba(255,149,184,0.98)_0%,rgba(244,63,94,0.99)_48%,rgba(190,24,93,0.99)_100%)] text-white shadow-[0_16px_32px_rgba(159,18,57,0.42),0_0_0_1px_rgba(255,228,237,0.18),inset_0_1px_0_rgba(255,255,255,0.24)] hover:border-rose-100 hover:shadow-[0_18px_36px_rgba(159,18,57,0.5),0_0_0_1px_rgba(255,228,237,0.22),inset_0_1px_0_rgba(255,255,255,0.28)] md:group-hover:border-rose-100 md:group-hover:bg-[linear-gradient(180deg,rgba(255,166,196,1)_0%,rgba(244,63,94,0.99)_44%,rgba(190,24,93,1)_100%)] md:group-hover:shadow-[0_18px_36px_rgba(159,18,57,0.5),0_0_0_1px_rgba(255,228,237,0.22),inset_0_1px_0_rgba(255,255,255,0.28)]' : ''} ${className}`}
            aria-pressed={active}
            aria-label={active ? 'Remove from favourites' : 'Add to favourites'}
        >
            <Heart
                size={size === 'sm' ? 15.5 : 18.5}
                strokeWidth={2.35}
                className={`drop-shadow-[0_1px_2px_rgba(0,0,0,0.28)] ${active ? 'fill-white text-white' : 'text-white'}`}
            />
        </button>
    );
}
